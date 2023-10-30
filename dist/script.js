new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      heading: "Ficha de Bombeiro",
      additionalInfo: `
--------------------------------------------------------Paciente--------------------------------------------------------
Data:
Sexo:
Nome Hospital:
Nome(Paciente):
Idade(Paciente):
RG/CPF(Paciente):
Fone(Paciente):
Acompanhante:
Idade:
Local de Ocorrência:
N°USB:
CÓD.UR:
N°OCORR:
CÓD.PS:
DESP:
H.CH:
KM FINAL:
CÓD.SIA/SUS:
--------------------------------------------------------Emergências--------------------------------------------------------
Emergência médica:
Com meio de Transporte:
Causado por Animais:
Incêndio:
Afogamento:
Deslizamento ou Desmoronamento:
Agressão:
Queda de Altura 2M:
Tentativa de Suicídio:
Queda Própria Altura:
Atropelamento:
Choque Elétrico:
Desabamento:
Doméstico:
Esportivo:
Intoxicação:
Queda de Bicicleta:
Queda de Moto:
Queda:
Trabalho:
Transferência:
Outro:
--------------------------------------------------------Avaliação do Paciente --------------------------------------------------------

------------------------------Maior de 5---------------------------------

Abertura Ocular
Espontânea:
Comando Verbal:
Estímulo Doloroso:
Nenhuma:

Resposta Verbal
Orientado:
Confuso:
Palavras Inapropriadas:
Palavras Incompreensíveis:
Nenhuma:

Resposta Motora
Obedece Comandos:
Localiza dor:
Movimento de retirada:
Flexão Anormal:
Extensão Anormal:
Nenhuma:

------------------------------Menor de 5---------------------------------

Abertura Ocular
Espontânea:
Comando Verbal:
Estímulo Doloroso:
Nenhuma:

Resposta Verbal
Palavras e Frases Inapropriadas:
Palavras Inapropriadas:
Choro Persistentes ou Gritos:
Sons Incompreensíveis:
Nenhuma:

Resposta Motora
Obedece Comandos:
Localiza dor/Estímulo Tatil:
Retirada do Segmento Estimulado:
Flexão Anormal (Decorticação):
Extensão Anormal (Decerebração):
Ausência (Paralisia Falecida, Hipônia):

--------------------------------------------------------Forma de Condução--------------------------------------------------------
Forma de Condução
Deitada:
Semi-Deitada:
Sentada:

A vitima era
Ciclista:
Condutor-Moto:
Gestante:
Pass Ban Frente:
Pass Moto:
Condutor-Carro:
Clinico:
Trauma:
Pass Ban Trás:
Pedestre:
--------------------------------------------------------Decisão de Transporte--------------------------------------------------------
Estado da vitima 

Crítico:
Instável:
Estavel:
Potencialmente Instável:

Decisão de Transporte
Motorista:
S1:
S2:
S3:
Demante:

--------------------------------------------------------Problemas Suspeitos---------------------------------------------------------

Psiquiatrico:
----Respiratório----
DPOC:
Inalação de fumaça:
--------------------
----Diabetes--------
Hiperglicemia:
Hipoglicemia:
-------------------
----Obstétricos----
Parto Emergêncial:
Gestante:
Hemor.excessiva:
--------------------
----Transporte------
Aéreo:
Clinico:
Emergêncial:
Pós-Trauma:
Samu:
Outros:
Sem remoção:
--------------------
Outro:

--------------------------------------------------------Sinais Vitais--------------------------------------------------------

Pressão Arterial:
mmhg:
Pulso(BSPM):
Respiração(M.R.M):
Temperatura:
Anormal:
>2Seg:
<2Seg:
Normal:
--------------------------------------------------------Localização dos Traumas--------------------------------------------------------

------------------------------Maior de 5---------------------------------
Local:
Lado:
Face:
Tipo:
-----Queimadura-----
cabeça:
pescoço:
T.Ant:
T.Pos:
GENI:
M.I.D:
M.I.E:
M.S.D:
M.S.E:
------------------------------Menor de 5---------------------------------
Local:
Lado:
Face:
Tipo:
-----Queimadura-----
cabeça:
pescoço:
T.Ant:
T.Pos:
GENI:
M.I.D:
M.I.E:
M.S.D:
M.S.E:

--------------------------------------------------------Objeto Recolhidos--------------------------------------------------------
texto:
imagem:
--------------------------------------------------------Sinais e Sintomas--------------------------------------------------------
Abdomen Sensível ou Rigido:
Afundamento de Crânio:
Agitação:
Aminésia:
Apinéia:
Bradicardia:
Bradipnéia:
Bronco-Aspirando:
Cefalia:
---------Cinose---------
Lábios:
Extremidades:
------------------------
Decorticação:
Deformidade:
Desmaio:
Desvio de Traquéia:
Dispnéia:
Dor local:
---------Edema---------
Generalizado:
Localizado:
------------------------
Enfisema subcutâneo:
Êstase de jugular:
Face Pálida:
-----Hemorragia---------
Interna:
Externa:
------------------------
Hipertensão:
Hipotensão:
Náuses e vômitos:
Nasoragia:
Óbito:
Otorréia:
O.V.A.C.E:
---------Parada---------
Cardíaca:
Respiratória:
------------------------
Priaprismo:
Prurido na Pele:
------------------------
---------Pupilas---------
Anisocoria:
Isocoria:
Reagente:
Ñ Reagente:
Midriase:
Miose:
------------------------
Sede:
Sinal de Battle:
Sinal de Guaxinim:
Sudorese:
Taquipnéia:
Taquicardia:
Tontura:
Outro:

--------------------------------------------------------Procedimentos Efetuados--------------------------------------------------------
Aspiração:
Avaliação Inicial:
Avaliação Continuada:
Chave de Rautek:
Cânula de Guedel:
Desobstrução de V.A:
Desobstrução do D.E.A:
Emprego do D.E.A:
Gerenciamento dos Riscos:
Limpeza de Ferimentos:
Curativos:
Compressivo:
Encravamento::
Ocular:
Queimadura:
Simples:
Maca Rigida:
Retirado do Capacete:
R.C.P:
Rolamento 90°:
Rolamento 180°:
Tomada Decisão:
Tratamento de Choque:
Uso de Cânula:
Uso de Colar:
Uso KED:
Uso TTF:
Ventilação Suporte:
Oxigenoterapia:
Reanimador:
----------Meios Auxiliares----------
Celesc:
Polícia:
Polícia Civil:
Polícia Militar:
Polícia PRE:
Polícia PRF:
DEF.Civil:
Cit:
IPG/PC:
Samu:
-------------------------------------
Outros:

--------------------------------------------------------Materiais Utilizados(A)--------------------------------------------------------
Ataduras: Quant:
Catéter TP. óculos: Quant:
Compressa Comum: Quant:
Kit's: Quant:
Luvas descartaveis(Pares): Quant:
Mascaras Desc: Quant:
Manta Alumiada: Quant:
Pás do DEA Quant:
Sonda de Aspiraca: Quant:
Soro Fisiológico: Quant:

--------------------------------------------------------Materiais Utilizados(B)--------------------------------------------------------
Base do Estabiliza: Quant:
Colar: Quant:
Coxins Estabiliza: Quant:
KED: Quant:
Maraca Rigida: Quant:
Tirante aranha:  Quant:
Tirante de cabeça: Quant:
Sonda de Aspiração: Quant:
Cânula: Quant:
Outro: Quant:
--------------------------------------------------------Anamnese--------------------------------------------------------
O que aconteceu(sinais e sintomas):
A quanto tempo isso aconteceu?:
Quais?(problema de saúde):
Horário da ultima medicação?:
Quais?(medicação):
Especifique(Alérgico a algo):
Ingeriu alimento ou liquido em 6h?:
--------------------------------------------------------Anamnese Gestacional--------------------------------------------------------
Periodo de gestação:
Nome do médico:
Quantos?(Filhos):
----Tempo das contrações----
 Duração:
 Intervalo:
----------------------------
Hora do nascimento:
Nome do bebê:
--------------------------------------------------------TERMO DE RECUSA DE ATENDIMENTO E/OU TRANSPORTE--------------------------------------------------------
Eu:
PORTADOR DA CARTEIRA DE IDENTIDADE RG Nº:
INSCRITO NO CPF SOB Nº:
ASS:
Testemunha:
Doc:
Testemunha:
Doc:
--------------------------------------------------------Observações Importantes--------------------------------------------------------
Texto:
--------------------------------------------------------Avaliação Cinemática--------------------------------------------------------
Distúrbio de comportamento:
Encontrado de capacete:
Encontrado de cinto:
Para-brisas avariado:
Caminhando na cena:
Painel avariado:
Volante torcido:
--------------------------------------------------------Responsável--------------------------------------------------------
Nome:
      `,
    };
  },
  methods: {
    generatePDF() {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      });

      // Divide o conteúdo em partes para acomodar em várias páginas
      const lines = this.additionalInfo.split('\n');
      const lineHeight = 12 / 72; // Altura de linha em polegadas
      const pageHeight = 11; // Altura da página em polegadas
      let y = 1; // Posição Y inicial

      lines.forEach(line => {
        // Verifica se a próxima linha cabe na página atual
        if (y + lineHeight > pageHeight) {
          // Adiciona uma nova página
          doc.addPage();
          y = 1;
        }

        // Adiciona a linha ao PDF
        doc.setFontSize(12);
        doc.text(line, 0.5, y);
        y += lineHeight;
      });

      // Salva o arquivo PDF com o nome 'Ficha_de_Bombeiro.pdf'
      doc.save("Ficha_de_Bombeiro.pdf");
    },
  },
});
//Definir Tamanho e Estilo da Fonte:
//doc.setFontSize(16); // Define o tamanho da fonte para 16 pontos
//doc.setFont("times", "italic"); // Define a fonte para Times Italic
//doc.setFontType("bold"); // Define o estilo da fonte para negrito

//Definir Cor do Texto:
//doc.setTextColor(255, 0, 0); // Define a cor do texto para vermelho (RGB)

//Adicionar Texto ao PDF:
//doc.text("Texto do PDF", 10, 20); // Adiciona texto na posição (10, 20)

//Adicionar Retângulos e Formas:
//doc.rect(10, 30, 50, 20); // Adiciona um retângulo na posição (10, 30) com largura 50 e altura 20
//doc.triangle(60, 30, 80, 30, 70, 50, "FD"); // Adiciona um triângulo
//doc.circle(100, 40, 10); // Adiciona um círculo na posição (100, 40) com raio 10

//Adicionar Imagens ao PDF:
//const imgData = "data:image/jpeg;base64,/9j/4AAQSk..."; // URL da imagem ou dados base64
//doc.addImage(imgData, "JPEG", 10, 10, 50, 50); // Adiciona uma imagem na posição (10, 10) com largura 50 e altura 50

//Adicionar Quebras de Página:
//doc.addPage(); // Adiciona uma nova página ao PDF

//Adicionar Links:
//doc.textWithLink("Clique aqui", 10, 20, { url: "https://www.exemplo.com" }); // Adiciona um link na posição (10, 20)

//Definir Cor de Fundo:
//doc.setFillColor(200, 220, 255); // Define a cor de fundo para azul claro (RGB)
//doc.rect(10, 30, 50, 20, "F"); // Adiciona um retângulo com cor de fundo

