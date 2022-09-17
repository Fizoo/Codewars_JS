function getParticipants(handshakes){
    if(!handshakes) return 0;

    let answer = 0;
    let sum = 0

    while(handshakes > sum) {
        sum = answer * (answer + 1) / 2;
        answer++;
    }

    return answer;
}

/*const getParticipants = handshakes => handshakes > 0 ? Math.ceil( ( 1 + (1 + 8 * handshakes)**0.5) / 2 ) : 1*/

console.log(getParticipants(1))//2
console.log(getParticipants(3))//3
console.log(getParticipants(7))//5
