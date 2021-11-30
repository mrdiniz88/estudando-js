const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 5;


function notasMaiores(n1, n2) {
    return n1 <= n2 ? n1: n2;
}

function media(n1, n2, n3) {
    const menorNota = notasMaiores(nota1, notasMaiores(nota2, nota3))

    if(menorNota === n1) {
        return(n2 + n3) / 2
    } else if(menorNota === n2) {
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }
}

function statusMedia(media) {
    if(media >= 7) {
        return 'APROVADO';
    } else if(media >= 4) {
        return 'RECUPERAÇÃO';
    } else {
        return 'REPROVADO'
    }
}

const mediaFinal = media(nota1, nota2, nota3)
const statusFinal = statusMedia(mediaFinal)  

console.log(statusFinal)