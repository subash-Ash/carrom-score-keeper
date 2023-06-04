let isMatchOver = false;
let teamA_score = 0;
let teamB_score = 0;
let isTeamA_won = false;
let ok_button=document.querySelector("#ok_button");
let winner = document.querySelector("#winner");
let round_count = 1;
let teamA_name = document.querySelector("#teamA_name");
let teamB_name = document.querySelector("#teamB_name")

let submit = ok_button.addEventListener("click",function(event){
    let round_row = document.querySelector("#round_row");
    let teamA_point_row = document.querySelector("#teamA_point_row");
    let teamB_point_row = document.querySelector("#teamB_point_row");
    round_row.insertAdjacentHTML("afterend",
    `<td>Round ${round_count}</td>`);
    teamA_point_row.insertAdjacentHTML("afterend",
                `<td>${document.querySelector("#teamA_score").value}</td>`);
    teamB_point_row.insertAdjacentHTML("afterend",
                `<td>${document.querySelector("#teamB_score").value}</td>`);
    round_count++;
    teamA_score+=parseInt(document.querySelector("#teamA_score").value);
    teamB_score+=parseInt(document.querySelector("#teamB_score").value);
    if(teamA_score>=30||teamB_score>=30){
        scoreCompare(teamA_score,teamB_score);
        isMatchOver=true;
    }
    if(isMatchOver){
        let result = document.querySelector("#result");
        let point_container = document.querySelector("#point_container");
        point_container.style.display="none";
        result.style.display="block";
        if(isTeamA_won){
            winner.innerText= teamA_name.value;
        }
        else if(!isTeamA_won){
            winner.innerText=teamB_name.value;
        }
    }
        console.log("match over1");
        teamA_score_display.innerText = teamA_score;
        teamB_score_display.innerText = teamB_score;
     }
)

function scoreCompare(teamA,teamB){
    if(teamA>teamB){
        isTeamA_won = true;

    }
    else{
        isTeamA_won = false;
    }
}

let show_score_table = document.querySelector("#show_score_table");
let score_table=document.querySelector("#score_table");
score_table.style.display = "none";
show_score_table.addEventListener("click",function(event){
    if (score_table.style.display === "none") {
        console.log("1");
        score_table.style.display = "block";
        show_score_table.value="Hide Table"
      } else {
        console.log("2d");
        score_table.style.display = "none";
        show_score_table.value="Show Table"
      }
})

