
        let alunos = [];
        function letdadosalunos() {
            let nome = document.getElementById('nome').value;
            let faltas = parseInt(document.getElementById('faltas').value);
            let media = parseFloat(document.getElementById('media').value);

            let aluno = {
                nome: nome,
                faltas: faltas,
                media: media

            };
            alunos.push(aluno);

            document.getElementById(`alunoform`).reset();

            exibiralunos();
        }
        function exibiralunos(){
            let listagem = document.getElementById('listagemalunos');
            listagem.innerHTML = "<h2>Listagem dos alunos:</h2>";
                for (let aluno of alunos){
                    listagem.innerHTML += `<p>Nome: ${alunos.nome}, faltas ${aluno.faltas}, media ${aluno.media}</p>`;

                }
        }
        

   