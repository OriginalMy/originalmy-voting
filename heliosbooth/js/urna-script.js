var $u = $.noConflict(true);
const votingSession = [
  {
    name: "Deputado Estadual",
    ballot: "deputado_estadual",
    numbersLength: 5,
    candidates: [
      //PEsp
      {
        name: "PEsp (Partido dos esportes)",
        id: "91",
        party: "PEsp",
        photo: null,
      },
      {
        name: "Basquete",
        id: "91001",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/91_partido_dos_esportes/91001_Basquete.PNG",
      },
      {
        name: "Hipismo",
        id: "91002",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/91_partido_dos_esportes/91002_Hiposmo.PNG",
      },
      {
        name: "Patinação",
        id: "91003",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/91_partido_dos_esportes/91002_Hiposmo.PNG",
      },
      {
        name: "Beisebol",
        id: "91004",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/91_partido_dos_esportes/91002_Hiposmo.PNG",
      },
      {
        name: "Polo Aquático",
        id: "91005",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/91_partido_dos_esportes/91002_Hiposmo.PNG",
      },
      //PMus
      {
        name: "Frevo",
        id: "92001",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/92_partido_dos_ritmos_musicais/92001_Frevo.PNG",
      },
      {
        name: "Jazz",
        id: "92002",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/92_partido_dos_ritmos_musicais/92002_jazz.PNG",
      },
      {
        name: "Música Eletrônica",
        id: "92003",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/92_partido_dos_ritmos_musicais/92003_Musica_Eletronica.PNG",
      },
      {
        name: "Heavy Metal",
        id: "92004",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/92_partido_dos_ritmos_musicais/92004_Heavy_Metal.PNG",
      },
      {
        name: "Salsa",
        id: "92005",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/92_partido_dos_ritmos_musicais/92005_Salsa.PNG",
      },
      //PProf
      {
        name: "Garçom",
        id: "93001",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/93_partido_das_profiss%C3%B5es/93001_Garcom.PNG",
      },
      {
        name: "Motorista",
        id: "93002",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/93_partido_das_profiss%C3%B5es/93002_Motorista.PNG",
      },
      {
        name: "Bombeira",
        id: "93003",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/93_partido_das_profiss%C3%B5es/93003_Bombeira.PNG",
      },
      {
        name: "Pintor",
        id: "93004",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/93_partido_das_profiss%C3%B5es/93004_Pintor.PNG",
      },
      {
        name: "Gari",
        id: "93005",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/93_partido_das_profiss%C3%B5es/93005_Gari.PNG",
      },
      //PFest
      {
        name: "Páscoa",
        id: "94001",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/94_partido_das_festas_populares/94001_pascoa.PNG",
      },
      {
        name: "Réveillon",
        id: "94002",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/94_partido_das_festas_populares/94002_reveillon.PNG",
      },
      {
        name: "Festa da Uva",
        id: "94003",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/94_partido_das_festas_populares/94003_festa_da_uva.PNG",
      },
      {
        name: "Folia de Reis",
        id: "94004",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/94_partido_das_festas_populares/94004_festa_do_milho.PNG",
      },
      {
        name: "Festa do milho",
        id: "94005",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/94_partido_das_festas_populares/94004_folia_de_reis.PNG",
      },
      //PFolc
      {
        name: "Iara",
        id: "95001",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/95_partido_do_folclore/95001_iara.PNG",
      },
      {
        name: "Barba-Ruiva",
        id: "95002",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/95_partido_do_folclore/95002_baraba_ruiva.PNG",
      },
      {
        name: "Bicho-Papão",
        id: "95003",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/95_partido_do_folclore/95003_bicho_papao.PNG",
      },
      {
        name: "Matintapereira",
        id: "95004",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/95_partido_do_folclore/95004_matintapereira.PNG",
      },
      {
        name: "Pisadeira",
        id: "95005",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_estadual/95_partido_do_folclore/95005_pisadeira.PNG",
      },
    ],
  },
  {
    name: "Deputado Federal",
    ballot: "deputado_federal",
    numbersLength: 4,
    candidates: [
      //PEsp
      {
        name: "Atletismo",
        id: "9101",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/91_partido_dos_esportes/9101_Atletismo.PNG",
      },
      {
        name: "Ginástica Artística",
        id: "9102",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/91_partido_dos_esportes/9102_ginastica_artistica.PNG",
      },
      {
        name: "Boxe",
        id: "9103",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/91_partido_dos_esportes/9103_boxe.PNG",
      },
      {
        name: "Halterofilismo",
        id: "9104",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/91_partido_dos_esportes/9104_halterofilismo.PNG",
      },
      {
        name: "Golfe",
        id: "9105",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/91_partido_dos_esportes/9105_golfe.PNG",
      },
      //PMus
      {
        name: "Sertanejo",
        id: "9201",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/92_partido_dos_ritmos_musicais/9201_sertanejo.PNG",
      },
      {
        name: "Reggae",
        id: "92002",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/92_partido_dos_ritmos_musicais/9202_reggae.PNG",
      },
      {
        name: "Música Clássica",
        id: "9203",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/92_partido_dos_ritmos_musicais/9203_musica_classica.PNG",
      },
      {
        name: "Ópera",
        id: "9204",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/92_partido_dos_ritmos_musicais/9204_opera.PNG",
      },
      {
        name: "Mariachi",
        id: "9205",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/92_partido_dos_ritmos_musicais/9205_mariachi.PNG",
      },
      //PProf
      {
        name: "Artista",
        id: "9301",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/93_partido_das_profissoes/9301_artista.PNG",
      },
      {
        name: "Operário",
        id: "9302",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/93_partido_das_profissoes/9302_operario.PNG",
      },
      {
        name: "Astronauta",
        id: "9303",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/93_partido_das_profissoes/9303_astronauta.PNG",
      },
      {
        name: "Cozinheira",
        id: "9304",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/93_partido_das_profissoes/9304_cozinheira.PNG",
      },
      {
        name: "Fotógrafo",
        id: "9305",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/93_partido_das_profissoes/9305_fotografo.PNG",
      },
      //PFest
      {
        name: "Boi-Bumbá",
        id: "9401",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/94_partido_das_festas_populares/9401_boi_bumba.PNG",
      },
      {
        name: "Peão de Boiadeiro",
        id: "9402",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/94_partido_das_festas_populares/9402_peao_de_boiadeiro.PNG",
      },
      {
        name: "Oktoberfest",
        id: "9403",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/94_partido_das_festas_populares/9403_oktoberfest.PNG",
      },
      {
        name: "Seman Farroupilha",
        id: "9404",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/94_partido_das_festas_populares/9404_semana_farroupilha.PNG",
      },
      {
        name: "Cavalhadas",
        id: "9405",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/94_partido_das_festas_populares/9405_cavalhadas.PNG",
      },
      //PFolc
      {
        name: "Lobisomem",
        id: "9501",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/95_partido_do_folclore/9501_lobisomem.PNG",
      },
      {
        name: "Cuca",
        id: "9502",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/95_partido_do_folclore/9502_cuca.PNG",
      },
      {
        name: "Negrinho do Pastoreio",
        id: "9503",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/95_partido_do_folclore/9502_negrinho_do_pastoreiro.PNG",
      },
      {
        name: "Mapinguari",
        id: "9504",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/95_partido_do_folclore/9504_mapinguari.PNG",
      },
      {
        name: "Cabra-Cabriola",
        id: "9505",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/deputado_federal/95_partido_do_folclore/9505_cabra_cabriola.PNG",
      },
    ],
  },
  {
    name: "Senador",
    ballot: "senador",
    numbersLength: 3,
    candidates: [
      //PEsp
      {
        name: "Natação",
        id: "911",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/senador/91_partido_dos_esportes/911_natacao.PNG",
        suplentes: [
          {
            name: "Esgrima",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/91_partido_dos_esportes/911_esgrima.PNG",
          },
          {
            name: "Rúgbi",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/91_partido_dos_esportes/911_rugbi.PNG",
          },
        ],
      },
      //PMus
      {
        name: "Samba",
        id: "921",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/senador/92_partido_dos_ritmos_musicais/921_samba.PNG",
        suplentes: [
          {
            name: "Tango",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/92_partido_dos_ritmos_musicais/921_tango.PNG",
          },
          {
            name: "Música Disco",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/92_partido_dos_ritmos_musicais/921_musica_disco.PNG",
          },
        ],
      },
      //PProf
      {
        name: "Enfermeira",
        id: "931",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/senador/93_partido_das_profissoes/931_enfermeira.PNG",
        suplentes: [
          {
            name: "Aeromoça",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/93_partido_das_profissoes/931_aeromoca.PNG",
          },
          {
            name: "Detetive",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/93_partido_das_profissoes/931_detetive.PNG",
          },
        ],
      },
      //PFest
      {
        name: "Festa Junina",
        id: "941",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/senador/94_partido_das_festas_populares/941_festa_junina.png",
        suplentes: [
          {
            name: "Lavagem do Bonfim",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/94_partido_das_festas_populares/941_lavagem_do_bonfim.PNG",
          },
          {
            name: "Dia das Bruxas",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/94_partido_das_festas_populares/941_dia_das_bruxas.PNG",
          },
        ],
      },
      //PFolc
      {
        name: "Sâci-Pererê",
        id: "951",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/senador/95_partido_do_folclore/951_saci_perere.PNG",
        suplentes: [
          {
            name: "Caipora",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/95_partido_do_folclore/951_caipora.PNG",
          },
          {
            name: "Mãe do Ouro",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/senador/95_partido_do_folclore/951_mae_do_ouro.PNG",
          },
        ],
      },
    ],
  },
  {
    name: "Governador",
    ballot: "governador",
    numbersLength: 2,
    candidates: [
      //PEsp
      {
        name: "Vôlei",
        id: "91",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/governador/91_partido_dos_esportes/91_volei.PNG",
        suplentes: [
          {
            name: "Tênis",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/governador/91_partido_dos_esportes/91_tenis.PNG",
          },
        ],
      },
      //PMus
      {
        name: "Forró",
        id: "92",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/governador/92_partido_dos_ritmos_musicais/92_forro.PNG",
        suplentes: [
          {
            name: "Pagode",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/governador/92_partido_dos_ritmos_musicais/92_pagode.PNG",
          },
        ],
      },
      //PProf
      {
        name: "Médica",
        id: "93",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/governador/93_partido_das_profissoes/93_medica.PNG",
        suplentes: [
          {
            name: "Bibliotecária",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/governador/93_partido_das_profissoes/93_bibliotecaria.PNG",
          },
        ],
      },
      //PFest
      {
        name: "Dia da Independência",
        id: "94",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/governador/94_partido_das_festas_populares/94_dia_da_independencia_do_brasil.PNG",
        suplentes: [
          {
            name: "Natal",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/governador/94_partido_das_festas_populares/94_natal.PNG",
          },
        ],
      },
      //PFolc
      {
        name: "Boto Cor-deRosa",
        id: "95",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/governador/95_partido_do_folclore/95_boto-cor-de-rosa.PNG",
        suplentes: [
          {
            name: "Boitatá",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/governador/95_partido_do_folclore/95_boitata.PNG",
          },
        ],
      },
    ],
  },
  {
    name: "Presidente",
    ballot: "president",
    numbersLength: 2,
    candidates: [
      {
        name: "Futebol",
        id: "91",
        party: "PEsp",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/presidente/91_partido_dos_esportes/91_futebol.PNG",
        suplentes: [
          {
            name: "Judô",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/presidente/91_partido_dos_esportes/91_judo.PNG",
          },
        ],
      },
      //PMus
      {
        name: "Rock",
        id: "92",
        party: "PMus",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/presidente/92_partido_dos_ritmos_musicais/92_rock.PNG",
        suplentes: [
          {
            name: "Música Popular Brasileira",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/presidente/92_partido_dos_ritmos_musicais/92_musica_popular_brasileira.PNG",
          },
        ],
      },
      //PProf
      {
        name: "Professora",
        id: "93",
        party: "PProf",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/presidente/93_partido_das_profissoes/93_Professora.PNG",
        suplentes: [
          {
            name: "Mágico",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/presidente/93_partido_das_profissoes/93_M%C3%A1gico.PNG",
          },
        ],
      },
      //PFest
      {
        name: "Copa do Mundo",
        id: "94",
        party: "PFest",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/presidente/94_partido_das_festas_populares/94_copa_do_mundo.PNG",
        suplentes: [
          {
            name: "Carnaval",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/presidente/94_partido_das_festas_populares/94_carnaval.PNG",
          },
        ],
      },
      //PFolc
      {
        name: "Vitória-Régia",
        id: "95",
        party: "PFolc",
        photo:
          "https://eleicoes2022.s3.amazonaws.com/presidente/95_partido_do_folclore/95_vitoria_regia.PNG",
        suplentes: [
          {
            name: "Curupira",
            photo:
              "https://eleicoes2022.s3.amazonaws.com/presidente/95_partido_do_folclore/95_curupira.PNG",
          },
        ],
      },
    ],
  },
];

const Voting = (function Voting() {
  const vm = this;
  vm.position = 0;
  vm.voteNumbers = $u('input[name="CandidateNumber[]"]');
  vm.end = false;
  vm.isLoading = true;
  vm.voting = [];
  vm.votingStep = null;
  vm.votingStepIndex = 0;
  vm.currentCandidate = null;
  vm.confirm = false;
  vm.votes = [];

  vm.fillNumberInput = function (event) {
    event.preventDefault();
    const target = $u(event.target);
    const value = target.data("value");
    if (vm.position > vm.voteNumbers.length) return;
    const numberInput = vm.voteNumbers.get(vm.position);
    if (!numberInput) return;
    numberInput.value = value;
    vm.position++;
  };

  vm.undoVote = function (event) {
    event.preventDefault();
    if ($u(window).width() < 600) $u("#NumberKeyboard").show();
    vm.position = 0;
    vm.confirm = false;
    vm.voteNumbers.val("");
    vm.votingStepIndex = --vm.votingStepIndex;
    vm.nextRoleToVote();
  };

  vm.blankVote = function (event) {
    event.preventDefault();
    $u(".screen").hide();
    vm.position = 0;
    vm.confirm = true;
    $u("#BlankVoteScreen").show();
  };

  vm.confirmVote = function (event) {
    event.preventDefault();
    $u(".screen").hide();
    if ($u(window).width() < 600) $u("#NumberKeyboard").hide();
    const voting = vm.voting[vm.votingStepIndex];
    $u(window).scrollTop();

    BOOTH.click_checkbox();

    if (vm.confirm) {
      vm.confirm = false;
      const candidate = vm.searchByCandidate();
      vm.votes[voting.ballot] = candidate;
      if (vm.votingStepIndex >= vm.voting.length - 1) {
        vm.turnOffEvents();
        vm.onEndVoting();
        return $u("#EndVotingScreen").show();
      }
      let boothCandidate = $u(".ballot_answer")
        .get()
        .filter((cN) => $u(cN).data("value") == candidate.id);
      boothCandidate = $u(boothCandidate);
      BOOTH.click_checkbox(
        boothCandidate.data("number"),
        boothCandidate.data("value"),
        true
      );
      BOOTH.validate_and_confirm(boothCandidate.data("number"));
      return vm.nextRoleToVote();
    }
    vm.confirm = true;

    const number = vm.getVoteNumber().join("");
    if (!number.length) return $u("#BlankVoteScreen").show();
    const candidate = vm.searchByCandidate();
    if (!candidate) return $u("#BlankVoteScreen").show();

    $u("#EnteredCandidateNumber").html(
      vm.getVoteNumber().map(function (value) {
        return "<span>" + value + "</span>";
      })
    );

    $u("#CandidateName").text(candidate.name);
    $u("#CandidateParty").text(candidate.party);

    if (candidate.photo && candidate.photo !== "")
      $u("#CandidatePhoto").attr("src", candidate.photo);
    else $u("#CandidatePhoto").attr("src", "images/person-placeholder.png");

    if (candidate.suplentes) {
      $u(".CandidateViceItems").hide();
      candidate.suplentes.forEach(function (suplente, index) {
        const position = index + 1;
        $u(".CandidateViceItems" + position).show();
        $u(".ViceCandidateName" + position).text(suplente.name);
        if (voting.ballot === "senador")
          $u(".ViceCandidateTitle" + position).text("Suplente " + position);
        else if (voting.ballot === "governador")
          $u(".ViceCandidateTitle" + position).text("Vice governador");
        else $u(".ViceCandidateTitle" + position).text("Vice presidente");
        if (suplente.photo && suplente.photo !== "")
          $u("#ViceCandidatePhoto" + position).attr("src", suplente.photo);
        else
          $u("#ViceCandidatePhoto" + position).attr(
            "src",
            "images/person-placeholder.png"
          );
      });
    } else $u(".CandidateViceItems").hide();

    $u("#ResultVoteScreen").show();
    $u(".NumberButton").off("click", vm.fillNumberInput);
  };

  vm.getVoteNumber = function () {
    return vm.voteNumbers.get().map(function (i) {
      return i ? i.value : "";
    });
  };

  vm.searchByCandidate = function () {
    const number = vm.getVoteNumber().join("");
    const voting = vm.voting[vm.votingStepIndex];
    const candidate = voting.candidates.find((c) => c.id == number);
    return candidate;
  };

  vm.turnOnEvents = function () {
    $u(".NumberButton").on("click", vm.fillNumberInput);
    $u("#UndoButton").on("click", vm.undoVote);
    $u("#BlankVoteButton").on("click", vm.blankVote);
    $u("#ApplyVoteButton").on("click", vm.confirmVote);
  };

  vm.turnOffEvents = function () {
    $u(".NumberButton").off("click", vm.fillNumberInput);
    $u("#UndoButton").off("click", vm.undoVote);
    $u("#BlankVoteButton").off("click", vm.blankVote);
    $u("#ApplyVoteButton").off("click", vm.confirmVote);
  };

  vm.fetchVoting = function () {
    return new Promise((resolve) => resolve(votingSession));
  };

  vm.goToRoleVote = function (ballot) {
    const voting = vm.voting[index];
    if ($u(window).width() < 600) $u("#NumberKeyboard").show();
    $u(".CandidateTitle").text(voting.name);
    $u("#CandidateNumberInputs").html("");
    for (let i = 0; i < voting.numbersLength; i++) {
      $u("#CandidateNumberInputs").append(
        '<input readonly name="CandidateNumber[]" />'
      );
    }
    vm.voteNumbers = $u('input[name="CandidateNumber[]"]');
    vm.position = 0;
    $u(".screen").hide();
    $u("#VoteScreen").show();
  };

  vm.nextRoleToVote = function () {
    $u(".NumberButton").off("click", vm.fillNumberInput);
    $u(".NumberButton").on("click", vm.fillNumberInput);
    vm.votingStepIndex = vm.votingStepIndex + 1;
    BOOTH.show_question(vm.votingStepIndex);
    vm.goToRoleVote(vm.votingStepIndex);
  };

  vm.onEndVoting = function () {
    $u("#send_ballot_form").submit();
  };

  vm.getCurrentBallot = function () {
    const ballot = $u("#BoothContainer").data("ballot");
    vm.voting.forEach(function (v, i) {
      if (v.ballot === ballot) return (vm.votingStepIndex = i);
    });
    return ballot.toLowerCase().replace(/\s+/, "_");
  };

  vm.init = function () {
    vm.fetchVoting()
      .then(function (voting) {
        vm.voting = voting;
        vm.goToRoleVote(0);
        vm.turnOnEvents();
        vm.isLoading = false;
      })
      .catch(function (err) {
        vm.isLoading = false;
      });
  };

  return vm;
})();
