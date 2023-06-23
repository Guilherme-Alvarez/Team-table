const p = document.querySelectorAll ('p')
const arrow_left = document.querySelector ('#button-phase-one')
const arrow_right = document.querySelector ('#button-phase-two')
const nou = document.querySelectorAll ('article')
const button = document.querySelector ('.button-simular')

let times_pote_um = [{name: p[2].outerText, goals: p[3].outerText}, {name: p[7].outerText, goals: p[8].outerText}, 
                     {name: p[12].outerText, goals: p[13].outerText}, {name: p[17].outerText, goals: p[18].outerText}, 
                     {name: p[22].outerText, goals: p[23].outerText}, {name: p[27].outerText, goals: p[28].outerText}, 
                     {name: p[32].outerText, goals: p[33].outerText}, {name: p[37].outerText, goals: p[38].outerText}]

let times_pote_dois = [{name: p[6].outerText, goals: p[5].outerText}, {name: p[11].outerText, goals: p[10].outerText}, 
                       {name: p[16].outerText, goals: p[15].outerText}, {name: p[21].outerText, goals: p[20].outerText}, 
                       {name: p[26].outerText, goals: p[25].outerText}, {name: p[31].outerText, goals: p[30].outerText}, 
                       {name: p[36].outerText, goals: p[35].outerText}, {name: p[41].outerText, goals: p[40].outerText}]


let team_podium_one_quarter_finals = []
let team_podium_two_quarter_finals = []

const team_podium_one = times_pote_um.map(value => {
    value.goals = Math.floor(Math.random() * (6 - 0) - 0)

    return value
})

const team_podium_two = times_pote_dois.map(value => {
    value.goals =Math.floor(Math.random() * (6 - 0) - 0)

    return value
})

const first_match = () => {

    if(team_podium_one[0].goals > team_podium_two[0].goals){
        p[3].innerHTML = team_podium_one[0].goals
        p[5].innerHTML = team_podium_two[0].goals
        return team_podium_one_quarter_finals.push(team_podium_one[0])}
        
    else if(team_podium_one[0].goals < team_podium_two[0].goals){
        p[3].innerHTML = team_podium_one[0].goals
        p[5].innerHTML = team_podium_two[0].goals
        return team_podium_one_quarter_finals.push(team_podium_two[0])}
    
    else if(team_podium_one[0].goals === team_podium_two[0].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[0].name, team_podium_two[0].name]
        const final = items[math]
        if(final === 'Grêmio'){++team_podium_one[0].goals
        p[3].innerHTML = team_podium_one[0].goals
        p[5].innerHTML = team_podium_two[0].goals
        return team_podium_one_quarter_finals.push(team_podium_one[0])}
    else{++team_podium_two[0].goals
        p[3].innerHTML = team_podium_one[0].goals
        p[5].innerHTML = team_podium_two[0].goals}
        return team_podium_one_quarter_finals.push(team_podium_two[0])}
}

const second_match = () => {

    if(team_podium_one[1].goals > team_podium_two[1].goals){
        p[8].innerHTML = team_podium_one[1].goals
        p[10].innerHTML = team_podium_two[1].goals
        return team_podium_two_quarter_finals.push(team_podium_one[1])}
        
    else if(team_podium_one[1].goals < team_podium_two[1].goals){
        p[8].innerHTML = team_podium_one[1].goals
        p[10].innerHTML = team_podium_two[1].goals
        return team_podium_two_quarter_finals.push(team_podium_two[1])}
    
    else if(team_podium_one[1].goals === team_podium_two[1].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[1].name, team_podium_two[1].name]
        const final = items[math]
        if(final === 'Atlético MG'){++team_podium_one[1].goals
        p[8].innerHTML = team_podium_one[1].goals
        p[10].innerHTML = team_podium_two[1].goals
        return team_podium_two_quarter_finals.push(team_podium_one[1])}
    else{++team_podium_two[1].goals
        p[8].innerHTML = team_podium_one[1].goals
        p[10].innerHTML = team_podium_two[1].goals}
        return team_podium_two_quarter_finals.push(team_podium_two[1])}
}

const third_match = () => {

    if(team_podium_one[2].goals > team_podium_two[2].goals){
        p[13].innerHTML = team_podium_one[2].goals
        p[15].innerHTML = team_podium_two[2].goals
        return team_podium_one_quarter_finals.push(team_podium_one[2])}
        
    else if(team_podium_one[2].goals < team_podium_two[2].goals){
        p[13].innerHTML = team_podium_one[1].goals
        p[15].innerHTML = team_podium_two[1].goals
        return team_podium_one_quarter_finals.push(team_podium_two[2])}
    
    else if(team_podium_one[2].goals === team_podium_two[2].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[2].name, team_podium_two[2].name]
        const final = items[math]
        if(final === 'Sport'){++team_podium_one[2].goals
        p[13].innerHTML = team_podium_one[2].goals
        p[15].innerHTML = team_podium_two[2].goals
        return team_podium_one_quarter_finals.push(team_podium_one[2])}
    else{++team_podium_two[2].goals
        p[13].innerHTML = team_podium_one[2].goals
        p[15].innerHTML = team_podium_two[2].goals}
        return team_podium_two_quarter_finals.push(team_podium_two[2])}
}

const four_match = () => {

    if(team_podium_one[3].goals > team_podium_two[3].goals){
        p[18].innerHTML = team_podium_one[3].goals
        p[20].innerHTML = team_podium_two[3].goals
        return team_podium_two_quarter_finals.push(team_podium_one[3])}
        
    else if(team_podium_one[3].goals < team_podium_two[3].goals){
        p[18].innerHTML = team_podium_one[3].goals
        p[20].innerHTML = team_podium_two[3].goals
        return team_podium_two_quarter_finals.push(team_podium_two[3])}
    
    else if(team_podium_one[3].goals === team_podium_two[3].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[3].name, team_podium_two[3].name]
        const final = items[math]
        if(final === 'América MG'){++team_podium_one[3].goals
        p[18].innerHTML = team_podium_one[3].goals
        p[20].innerHTML = team_podium_two[3].goals
        return team_podium_two_quarter_finals.push(team_podium_one[3])}
    else{++team_podium_two[3].goals
        p[18].innerHTML = team_podium_one[3].goals
        p[20].innerHTML = team_podium_two[3].goals}
        return team_podium_two_quarter_finals.push(team_podium_two[3])}
}

const five_match = () => {

    if(team_podium_one[4].goals > team_podium_two[4].goals){
        p[23].innerHTML = team_podium_one[4].goals
        p[25].innerHTML = team_podium_two[4].goals
        return team_podium_one_quarter_finals.push(team_podium_one[4])}
        
    else if(team_podium_one[4].goals < team_podium_two[4].goals){
        p[23].innerHTML = team_podium_one[4].goals
        p[25].innerHTML = team_podium_two[4].goals
        return team_podium_one_quarter_finals.push(team_podium_two[4])}
    
    else if(team_podium_one[4].goals === team_podium_two[4].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[4].name, team_podium_two[4].name]
        const final = items[math]
        if(final === 'Athletico PR'){++team_podium_one[4].goals
        p[23].innerHTML = team_podium_one[4].goals
        p[25].innerHTML = team_podium_two[4].goals
        return team_podium_one_quarter_finals.push(team_podium_one[4])}
    else{++team_podium_two[4].goals
        p[23].innerHTML = team_podium_one[4].goals
        p[25].innerHTML = team_podium_two[4].goals}
        return team_podium_one_quarter_finals.push(team_podium_two[4])}
}

const six_match = () => {

    if(team_podium_one[5].goals > team_podium_two[5].goals){
        p[28].innerHTML = team_podium_one[5].goals
        p[30].innerHTML = team_podium_two[5].goals
        return team_podium_two_quarter_finals.push(team_podium_one[5])}
        
    else if(team_podium_one[5].goals < team_podium_two[5].goals){
        p[28].innerHTML = team_podium_one[5].goals
        p[30].innerHTML = team_podium_two[5].goals
        return team_podium_two_quarter_finals.push(team_podium_two[5])}
    
    else if(team_podium_one[5].goals === team_podium_two[5].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[5].name, team_podium_two[5].name]
        const final = items[math]
        if(final === 'Fluminense'){++team_podium_one[5].goals
        p[28].innerHTML = team_podium_one[5].goals
        p[30].innerHTML = team_podium_two[5].goals
        return team_podium_two_quarter_finals.push(team_podium_one[5])}
    else{++team_podium_two[5].goals
        p[28].innerHTML = team_podium_one[5].goals
        p[30].innerHTML = team_podium_two[5].goals}
        return team_podium_two_quarter_finals.push(team_podium_two[5])}
}

const seven_match = () => {

    if(team_podium_one[6].goals > team_podium_two[6].goals){
        p[33].innerHTML = team_podium_one[6].goals
        p[35].innerHTML = team_podium_two[6].goals
        return team_podium_one_quarter_finals.push(team_podium_one[6])}
        
    else if(team_podium_one[6].goals < team_podium_two[6].goals){
        p[33].innerHTML = team_podium_one[6].goals
        p[35].innerHTML = team_podium_two[6].goals
        return team_podium_one_quarter_finals.push(team_podium_two[6])}
    
    else if(team_podium_one[6].goals === team_podium_two[6].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[6].name, team_podium_two[6].name]
        const final = items[math]
        if(final === 'Santos'){++team_podium_one[6].goals
        p[33].innerHTML = team_podium_one[6].goals
        p[35].innerHTML = team_podium_two[6].goals
        return team_podium_one_quarter_finals.push(team_podium_one[6])}
    else{++team_podium_two[6].goals
        p[33].innerHTML = team_podium_one[6].goals
        p[35].innerHTML = team_podium_two[6].goals}
        return team_podium_one_quarter_finals.push(team_podium_two[6])}
}

const eight_match = () => {

    if(team_podium_one[7].goals > team_podium_two[7].goals){
        p[38].innerHTML = team_podium_one[7].goals
        p[40].innerHTML = team_podium_two[7].goals
        return team_podium_two_quarter_finals.push(team_podium_one[7])}
        
    else if(team_podium_one[7].goals < team_podium_two[7].goals){
        p[38].innerHTML = team_podium_one[7].goals
        p[40].innerHTML = team_podium_two[7].goals
        return team_podium_two_quarter_finals.push(team_podium_two[7])}
    
    else if(team_podium_one[7].goals === team_podium_two[7].goals){const math = Math.floor(Math.random() * 2)
        const items = [team_podium_one[7].name, team_podium_two[7].name]
        const final = items[math]
        if(final === 'Palmeiras'){++team_podium_one[7].goals
        p[38].innerHTML = team_podium_one[7].goals
        p[40].innerHTML = team_podium_two[7].goals
        return team_podium_two_quarter_finals.push(team_podium_one[7])}
    else{++team_podium_two[7].goals
        p[38].innerHTML = team_podium_one[7].goals
        p[40].innerHTML = team_podium_two[7].goals}
        return team_podium_two_quarter_finals.push(team_podium_two[7])}
}


const test = () => {

    first_match()
    second_match()
    third_match()
    four_match()
    five_match()
    six_match()
    seven_match()
    eight_match()

    console.log(team_podium_one)
    console.log(team_podium_two)
    console.log(team_podium_one_quarter_finals)
    console.log(team_podium_two_quarter_finals)
    button.setAttribute('disabled', true)
}


button.addEventListener('keyup', ()=> {console.log('mudou')})








