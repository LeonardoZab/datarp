(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime().toLocaleString("en-US", {timeZone: "America/Sao_Paulo"}),
          distance = countDown - now;
        atualReal = new Date();
        inicioReal = new Date(2022, 12, 10, 00);
        inicioRp = new Date(-58, 00, 01, 00);
        tempo = atualReal - inicioReal;
        tempoRa = tempo * 105;
        var ms = inicioRp.getTime() + tempoRa;
      
        inicioRp = new Date(ms);

        var mes = inicioRp.getUTCMonth() + 1; //months from 1-12
        var dia = inicioRp.getUTCDate();
        var ano = inicioRp.getUTCFullYear();
        var hora = inicioRp.getHours();
        var minuto = inicioRp.getMinutes();

        if (dia < 10) {
          var dia = "0" + dia
        }

        if (mes < 10) {
          var mes = "0" + mes
        }


        document.getElementById("days").innerText = dia,
          document.getElementById("hours").innerText = mes,
          document.getElementById("seconds").innerText = hora,
          document.getElementById("minutos").innerText = minuto,
          document.getElementById("minutes").innerText = ano;

        //do something later when date is reached
        if (dia == 1 && mes == 01) {
          document.getElementById("headline").innerText = "Feliz ano novo!";
        }
        if (dia == 1 && mes == 5) {
          document.getElementById("headline").innerText = "Feliz Dia do Trabalhador!";
        }
        if (dia == 7 && mes == 9) {
          document.getElementById("headline").innerText = "Feliz Dia da Independência!";
        }
        if (dia == 12 && mes == 10) {
          document.getElementById("headline").innerText = "Feliz Dia de Nossa Senhora Aparecida!"
        }
        if (dia == 2 && mes == 11) {
          document.getElementById("headline").innerText = "Feliz Dia de Finados!";
        }
        if (dia == 15 && mes == 1) {
          document.getElementById("headline").innerText = "Feliz Dia da Proclamação da República!";
        }
        if (dia == 25 && mes == 12) {
          document.getElementById("headline").innerText = "Feliz Natal!";
        }
        //seconds
      }, 0)
  }());
