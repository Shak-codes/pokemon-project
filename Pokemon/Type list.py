import pokepy
import json
import time

client = pokepy.V2Client()
pkmn = client.get_evolution_chain(140)
#print(pkmn[0].name)
pkmn2 = pkmn[0].chain.evolves_to[0]
#print(int(strn[42:].replace("/", "")))
#print(pkmn[0].chain.evolves_to[0].evolution_details[0].item)
pokemon_lst = []

def create_pokemon_list():
    f = open("pokemon.txt", "a")
    for x in range(1, 722):
        f.write(client.get_pokemon(x)[0].name + "\n")
    f.close()
    print("Completed")


def pokemon_data():

    idx = 1
    
    ## Open file of pokemon names
    f = open("pokemon.txt", "r")

    ## Pokemon dict
    pokemon = {
        "name": "",
        "type": [],
        "moves_by_tm": [],
        "moves": [],
        "move_levelup": [],
        "abilities": [],
        "rates": {"gender": 0, "capture": 0, "growth": ""},
        "evo_into": [],
        "evo_req": [],
        "base_stats": []
    }
        
    for x in f:

        ## Print pokemon name and assign pokemon data to pkmn
        name = x.lower().strip()

        pkmn = client.get_pokemon(name)
        pokemon["name"] = name
        print(name)

        ## Create variables to hold necessary data
        ## before assignment to pokemon dictionary
        types = []
        moves_by_tm = []
        moves = []
        move_levelup = []
        abilities = []
        gender_rate = 0
        capture_rate = 0
        growth_rate = ""
        evo_into = []
        evo_req = []
        base_stats = []

        ## Number of types current pokemon has into variable
        type_num = len(pkmn[0].types)

        ## Loop through all types and append into types list
        for i in range(type_num):
            types.append(pkmn[0].types[i].type.name)

        ## Number of moves pokemon can learn into variable
        move_num = len(pkmn[0].moves)

        ## Loop every move to place them within the list in order
        
        for k in range(1, 100):

            ## start by checking if any move out of all moves can be
            ## learned at level 1, then 2, 3, all the way to 100
            for i in range(move_num):

                ## Game versions the move appears in, into variable
                move_version = len(pkmn[0].moves[i].version_group_details)

                ## Loop through move_version
                for j in range(move_version):

                    ## Append move if learnable in ORAS by levelup
                    ## to both moves and move_levelup
                    if (pkmn[0].moves[i].version_group_details[j].version_group.name == "omega-ruby-alpha-sapphire"
                        and pkmn[0].moves[i].version_group_details[j].move_learn_method.name == "level-up"
                        and pkmn[0].moves[i].move.name not in moves and pkmn[0].moves[i].version_group_details[j].level_learned_at == k):
                        moves.append(pkmn[0].moves[i].move.name)
                        move_levelup.append(pkmn[0].moves[i].version_group_details[j].level_learned_at)

                    ## Else if learnable in ORAS append move to moves_by_tm
                    elif (pkmn[0].moves[i].version_group_details[j].move_learn_method.name == "machine" and pkmn[0].moves[i].move.name not in moves_by_tm):
                        moves_by_tm.append(pkmn[0].moves[i].move.name)

        ## Get pokemon's base stats
        for i in range(6):
            lst = []
            lst.append(pkmn[0].stats[i].stat.name)
            lst.append(pkmn[0].stats[i].base_stat)
            base_stats.append(lst)

        ## Pokemon's potential abilities into variable
        ability_count = len(pkmn[0].abilities)

        ## Loop through each variable and append to abilities
        for i in range(ability_count):
            abilities.append(pkmn[0].abilities[i].ability.name)

        ## Get pokemon rates
        pkmn = client.get_pokemon_species(name)

        gender_rate = pkmn[0].gender_rate
        capture_rate = pkmn[0].capture_rate
        growth_rate = pkmn[0].capture_rate

        found = False

        
        ## Get evolution data
        evos = client.get_evolution_chain(idx)[0].chain
        has_evo = hasattr(evos, 'evolves_to')
        

        if (has_evo == True):
            total_evos = len(evos.evolves_to)
            evo_data = []
            
            for i in range(total_evos):

                evo_into.append(evos.evolves_to[i].species.name)

                ## Create list that will hold the string data we wish to send into evo_req
                string_data = ["item", "trigger", "gender", "held_item", "known_move", "known_move_type",
                               "location", "min_level", "min_happiness", "min_beauty", "min-affection",
                               "needs_overworld_rain", "party_species", "party_type", "relative_physical_status",
                               "time_of_day", "trade_species", "turn_upside_down"]
                string_len = len(string_data)

                ## Reassign pkmn variable to evolution details
                pkmn = evos.evolves_to[i].evolution_details[0]
                
                for i in range(string_len):
                    data = []
                    data.append(string_data[i])
                    req = False
                    
                    ## Get item
                    if i == 0:
                        req = pkmn.item
                    ## Get trigger
                    elif i == 1:
                        req = pkmn.trigger
                    ## Get gender
                    elif i == 2:
                        req = pkmn.gender
                    ## Get held_item
                    elif i == 3:
                        req = pkmn.held_item
                    ## Get known_move
                    elif i == 4:
                        req = pkmn.known_move
                    ## Get known_move_type
                    elif i == 5:
                        req = pkmn.known_move_type
                    ## Get location
                    elif i == 6:
                        req = pkmn.location
                    ## Get min_level
                    elif i == 7:
                        req = pkmn.min_level
                    ## Get min_happiness
                    elif i == 8:
                        req = pkmn.min_happiness
                    ## Get min_beauty
                    elif i == 9:
                        req = pkmn.min_beauty
                    ## Get min_affection
                    elif i == 10:
                        req = pkmn.min_affection
                    ## Get needs_overworld_rain
                    elif i == 11:
                        req = pkmn.needs_overworld_rain
                    ## Get party_species
                    elif i == 12:
                        req = pkmn.party_species
                    ## Get party_type
                    elif i == 13:
                        req = pkmn.party_type
                    ## Get relative_physical_status
                    elif i == 14:
                        req = pkmn.relative_physical_stats
                    ## Get time_of_day
                    elif i == 15:
                        req = pkmn.time_of_day
                    ## Get trade_species
                    elif i == 16:
                        req = pkmn.trade_species
                    ## Get turn_upside_down
                    elif i == 17:
                        req = pkmn.turn_upside_down

                    if req is None:
                        data.append(False)
                    elif req == "":
                        data.append(False)
                    elif (isinstance(req, int) or isinstance(req, str)):
                        data.append(req)
                    else:
                        data.append(req.name)

                    evo_data.append(data)

                evo_req.append(evo_data)

                    
        ## If pokemon does not evolve set parameters to false
        else:
            evo_into = False
            evo_req = False
            pokemon["evo-req"] = evo_req
            
    

        ## Update pokemon dict
            
        pokemon["type"] = types
        pokemon["moves_by_tm"] = moves_by_tm
        pokemon["moves"] = moves
        pokemon["move_levelup"] = move_levelup
        pokemon["abilities"] = abilities
        pokemon["rates"]["gender"] = gender_rate
        pokemon["rates"]["capture"] = capture_rate
        pokemon["rates"]["growth"] = growth_rate
        pokemon["evo_into"] = evo_into
        pokemon["evo-req"] = evo_req
        pokemon["base_stats"] = base_stats

        idx += 1
        
        ## Prepare to write to json file
        json_object = json.dumps(pokemon, indent = 4)

        with open("pokemon_data.json", "a") as outfile:
            outfile.write(json_object)
            outfile.write(",")

        

    ## Alert user of program completion
    print("Completed")


