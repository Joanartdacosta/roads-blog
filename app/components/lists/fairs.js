import REGIONS_LABELS from "../enums/regions_labels";

const FAIRS = [
  {
    id: "fair-01",
    title: "Festa da Nossa Senhora das Areias",
    month: new Date("2023-10-15"),
    startDate: new Date("2023-10-15T00:00:00"),
    endDate: new Date("2023-10-31T00:00:00"),
    region: REGIONS_LABELS.north,
    district: "Aveiro",
    town1: "Aveiro",
    town2: "Sao Jacinto",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description:
      "Uma das mais antigas romarias, na que já foi Paróquia de Santa Maria das Areias, no município de Viana do Castelo. Terra de pescadores, da seca do bacalhau, de farta agricultura, para aqui concorriam gentes de freguesias bem distantes para pedirem à Nossa Senhora das Areias que livrasse os seus campos, as vinhas, dos males da terra e as colheitas fossem fartas.",
    paragraph1:
      "Uma lenda esteve na base da construção da ermida que, segundo alguns documentos, já existiria no século XV. Conta essa lenda que um certo dia, entrou pela barra um casco de navio que encalhara na costa das Areias.",
    paragraph2:
      "No interior deste, descobriu-se uma pequena imagem da Nossa Senhora da Conceição. Tal facto foi motivo para a construção da ermida, a mando, segundo a tradição, do Cabido do Porto, na época, o senhorio da região, a quem cabia a dízima do pescado.",
    paragraph3:
      "A santa recebeu o apelido Areias, pois, na época, ainda S. Jacinto se denominava Areias. A partir desta lenda a freguesia presta homenagem à Senhora das Areias.",
    paragraph4: "",
    sources:
      "Retirado do Site “http://patrimonioreligiosodeaveiro.blogspot.com/2020/11/historia-da-capela-de-nossa-senhora-das.html” e “https://jf-darque.com/a-singela-festa-de-nossa-senhora-das-areias/” , consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-02",
    title: "Festa de Nossa Senhora do Rosário (Terra da Sopa Seca)",
    month: new Date("2023-10-02"),
    startDate: new Date("2023-10-02T00:00:00"),
    endDate: new Date("2023-10-02T00:00:00"),
    region: REGIONS_LABELS.north,
    district: "Porto",
    town1: "Penafiel",
    town2: "Duas Igrejas",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description: "",
    paragraph1:
      "Na Festa de Nossa Senhora do Rosário não pode faltar a SOPA SECA (sobras de pão em calda de limão, canela, vinho do Porto e folhas de hortelã levadas a forno de lenha). ",
    paragraph2:
      "Esta sopa típica do final das vindimas, e do Natal, é mais um doce, do que uma sopa. Era conhecida pela sobremesa dos pobres porque era feita nesta época em honra de Nossa Senhora  do Rosário pelos mais pobres.",
    paragraph3:
      "A santa recebeu o apelido Areias, pois, na época, ainda S. Jacinto se denominava Areias.",
    paragraph4:
      "A partir desta lenda a freguesia presta homenagem à Senhora das Areias.",
    sources:
      "Retirado do site “https://www.mysound-mag.com/2021/09/festa-senhora-rosario-duas-igrejas.html”, consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-03",
    title: "Festa de Nossa Senhora do Fetal",
    month: new Date("2023-10-15"),
    startDate: new Date("2023-10-15T00:00:00"),
    endDate: new Date("2023-10-31T00:00:00"),
    region: REGIONS_LABELS.center,
    district: "Leiria",
    town1: "Batalha",
    town2: "Reguengo do Fetal",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description: "",
    paragraph1:
      "Na aldeia de Reguengo do Fetal, no Concelho da Batalha, realizam-se anualmente duas procissões ancestrais, intervaladas por sete dias, únicas em todo o país, que conferem a esta manifestação religiosa uma ambiência única. Toda a aldeia é iluminada através da utilização de milhares de cascas de caracóis que a população, com grande sentido devocional, dispõe nas ruas e nas escarpas recortadas desta localidade.",
    paragraph2:
      "As procissões realizam-se em período noturno, com a utilização de milhares de cascas de caracóis onde se encontram embebidas, em azeite, torcidas de cordel que servem de pavio e que depois de acesas conferem um efeito visual único e impactante para quem participa nas procissões.",
    paragraph3:
      "A iluminação realizada com as cascas de caracóis não se limita ao percurso dos cerca de 800 metros entre os dois locais uma vez que os habitantes executam autênticas obras artísticas com a iluminação das suas casas, recriando moinhos, fachadas de igrejas, cruzes e outros motivos religiosos, que requerem arte e engenho na colocação das cascas e nas formas expressivas que recriam, estimando-se que sejam utilizadas 12 mil cascas de caracóis nas ornamentações.",
    paragraph4:
      "As iluminações estendem-se também às escarpas de toda a aldeia, o que proporciona aos visitantes a oportunidade única de assistirem ao vivo a um espetáculo impressionante de luz, cor e de devoção.",
    sources:
      "Retirado do site “https://7maravilhas.pt/portfolio/procissao-dos-caracois-festa-de-nossa-senhora-do-fetal/”, consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-04",
    title: "Festa do Senhor dos Milagres",
    month: new Date("2023-10-11"),
    startDate: new Date("2023-10-11T00:00:00"),
    endDate: new Date("2023-10-11T00:00:00"),
    region: REGIONS_LABELS.islands,
    district: "Arquipélago da Madeira",
    town1: "Machico",
    town2: "Machico",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description: "",
    paragraph1:
      "Segundo os historiadores, foi no dia 2 de julho de 1419, num sítio do concelho de Machico, que passou a ser denominado Banda d’Além, que se celebrou por padres franciscanos, a primeira missa na Madeira. Como agradecimento da nova descoberta, João Gonçalves Zarco mandou construir uma capela, no local onde se realizou tal ato litúrgico, à qual foi dado o nome de Capela de Cristo. Segundo a tradição popular, a capela está assente no túmulo dos lendários e trágicos amantes Robert Machim e Ane d’Arfet, ingleses que fugiram de Bristol e que teriam sido os primeiros a chegarem à Madeira.",
    paragraph2:
      "Em 9 de outubro de 1803, depois de dias consecutivos a chover, o leito da ribeira transbordou, inundando a vila de Machico e toda a zona leste da freguesia. As águas também invadiram a capela, destruindo-a parcialmente e arrastaram para o mar, a imagem de Nosso Senhor na Cruz, obra do séc. XVI. Segundo a lenda, três dias depois, uma embarcação americana que vinha do Funchal recolheu a imagem, que, apesar do seu peso, milagrosamente boiava. Ao pretender seguir viagem, o vento começou a soprar em direção contrária. O capitão decidiu então levar a imagem para a Sé do Funchal.",
    paragraph3:
      "Em 1813 a capela é reconstruída pelos Irmãos da Misericórdia, voltando a imagem para a sua capela, num barco, acompanhada por alguns pescadores naturais de Machico. Como chegou de noite, foi recebida pelos pescadores com archotes, cantando hinos ao Senhor e por esse motivo estes, munidos de archotes, figuram, anualmente, na procissão.",
    paragraph4:
      "Ainda segundo a lenda, quando os barcos entraram na baía, os sinos tocaram a rebate sem que ninguém lhes tocasse. Devido a este milagre e à fé do povo, a capela passou a ser denominada de Capela dos Milagres. Em memória do dia em que Nosso Senhor dos Milagres protegeu aquela zona aquando da grande aluvião de 1803 e devido ao facto de se ter recuperado milagrosamente a imagem intacta, celebra-se a 8 e 9 de outubro a sua festa.",
    sources:
      "“https://cultura.madeira.gov.pt/visitas-virtuais1/1315-festa-do-senhor-dos-milagres-machico.html”, consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-05",
    title: "Feira dos Gorazes",
    month: new Date("2023-10-01"),
    startDate: new Date("2023-10-01T00:00:00"),
    endDate: new Date("2023-10-01T00:00:00"),
    region: REGIONS_LABELS.north,
    district: "Braganca",
    town1: "Mogadouro",
    town2: "Mogadouro, Valverde, Vale de Porco e Vilar de Rei",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description:
      "A feira dos Gorazes é uma das fair anuais mais antigas de Portugal e, seguramente, a mais importante e antiga feira das Terras de Trás-os-Montes.",
    paragraph1:
      "O certame tem lugar em Mogadouro, pelo menos, desde os dias 15 e 16 de outubro de 1760, ano em que aparecem as primeiras referências escritas sobre o evento, embora exista quem defenda a sua origem medieval. Se não é de estranhar a origem anterior ao século XVIII desta Feira, motivo de maior surpresa e alvo até de uma certa controvérsia é a própria designação do certame. É que apesar de Goraz ser nome de peixe o que é facto é que na Feira todos se juntam para comer carne. Tamanha contradição parece encontrar explicação na história e na origem da própria palavra.",
    paragraph2:
      "Goraz será o resultado da evolução da palavra Voraz relacionado com a grande apetência para o consumo de carne de porco e vitela, neste período. De acordo com A. Mourinho, autor de uma obra dedicada a esta feira o termo Gorazil, Corazil e Goarazel têm a sua raiz na palavra grega Koipás (que se lê Goiráz ou Koirás), a qual significa carne de porco.",
    paragraph3:
      "O “Goarazel” ou “Goraz” seria um imposto pago pelos de Mogadouro aos senhores destas terras. O tributo, pago em carne de porco (localmente designada marrã) por altura da Feira anual, deu nome ao evento e popularizou o consumo e compra da marrã durante a Feira.",
    paragraph4:
      "A tese não é consensual, mas foi ganhando expressão e os mogadourenses continuam a pagar o imposto à tradição durante os dias do evento. À marrã juntou-se, atualmente, a posta transmontana e poucos são os que resistem a degustar um bom naco de carne durante os Gorazes.",
    sources:
      "Retirado do site “https://7maravilhas.pt/portfolio/feira-dos-gorazes-de-mogadouro/”, consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-06",
    title: "Feira das Mercês",
    month: new Date("2023-10-15"),
    startDate: new Date("2023-10-15T00:00:00"),
    endDate: new Date("2023-10-15T00:00:00"),
    region: REGIONS_LABELS.center,
    district: "Lisboa",
    town1: "Sintra",
    town2: "Rio de Mouro",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description:
      "Esta feira realiza-se na Quinta do Marquês de Pombal, mandada construída pelo próprio para oferecer ao seu filho.",
    paragraph1:
      "Esta feira realiza-se na Quinta do Marquês de Pombal, mandada construída pelo próprio para oferecer ao seu filho.",
    paragraph2:
      "O evento transporta os visitantes para o último quartel do séc. XVIII, altura em que a feira das Mercês se tornou na bolsa agrícola da região saloia, por ser aqui que se fixavam os preços dos cereais, legumes e outros bens de primeira necessidade, se adquiriam instrumentos agrícolas, se contratava pessoal para o cultivo dos campos, e se deslocava a população da região saloia e de Lisboa para fazer compras e participar na festa religiosa de Nossa Sra. das Mercês junto da capela com o seu nome.",
    paragraph3:
      "O momento social mais importante da Feira das Mercês eram as aventuras amorosas preconizadas pelos rapazes e raparigas no muro que delimitava o recinto da feira, ao qual o povo tão afavelmente chamou de Muro do Derrete.",
    paragraph4: "",
    sources:
      "Retirado do site “https://cm-sintra.pt/atualidade/agenda/1482-a-feira-das-merces-esta-de-regresso-a-sintra-2”, consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-07",
    title: "Festa dos Círios a Nossa Senhora dos Remédios",
    month: new Date("2023-10-20"),
    startDate: new Date("2023-10-20T00:00:00"),
    endDate: new Date("2023-10-20T00:00:00"),
    region: REGIONS_LABELS.center,
    district: "Leiria",
    town1: "Peniche",
    town2: "Peniche",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description: "",
    paragraph1:
      "A tradição mantém-se no terceiro domingo de outubro, em que o Santuário de Nossa Senhora dos Remédios, em Peniche, acolhe os romeiros que ali querem comparecer para cumprir todas as promessas feitas ao longo do ano, em círios (peregrinações coletivas) por devoção a Nossa Senhora e muitas vezes pelas graças já recebidas.",
    paragraph2:
      "A tradicional procissão faz-se em redor do santuário com a imagem de Nossa Senhora dos Remédios e no final há o tradicional canto das loas a Nossa Senhora, seguido da despedida dos Círios.",
    paragraph3: "",
    paragraph4: "",
    sources:
      "Retirado do site “https://jornaldascaldas.pt/2021/10/18/cirios-a-nossa-senhora-dos-remedios-2/”, consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-08",
    title: "Feira de Castro",
    month: new Date("2023-10-15"),
    startDate: new Date("2023-10-15T00:00:00"),
    endDate: new Date("2023-10-31T00:00:00"),
    region: REGIONS_LABELS.center,
    district: "Beja",
    town1: "Castro Verde",
    town2: "Uniao das Freguesias de Castro Verde e Casével",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description:
      "Instituída por Filipe II, em 1620, em resposta a uma solicitação feita pelos moradores do concelho que pretendiam obter, com o rendimento dos terrádegos (imposto sobre o terreno ocupado pelas barracas e tendas dos feirantes), os fundos necessários à reconstrução da Igreja das Chagas do Salvador (ou Igreja de Nossa Senhora dos Remédios), a Feira de Castro depressa se tornou a principal feira do sul, primeiro de gado, depois de mil e uma mercadorias, manufaturas e produtos da terra, animando o comércio local e regional.",
    paragraph1: "",
    paragraph2:
      "Durante três dias e encerrando, invariavelmente, numa tradição que se perpetua no terceiro domingo de outubro, que originou o dito popular de «tão certo como a Feira de Castro», a feira mantém vivos alguns elos com o passado, desde o tradicional arraial de gado à venda dos produtos do pequeno comércio e da indústria familiar, das mantas de lã aos queijos, dos frutos secos aos artefactos da latoaria, das quinquilharias às loiças de barro, das alfaias agrícolas ao mobiliário rústico.",
    paragraph3:
      "Com o passar dos tempos, a feira acabou por se moldar às exigências do presente e aos ditames da modernidade, tanto no comércio como na indústria do lazer e do divertimento. Porém, continua a mesma no apelo que faz ao convívio, à troca e ao encontro.",
    paragraph4:
      "Paralelamente à animação da própria feira, é dinamizado um conjunto de iniciativas que têm como referência o valorizar da tradição e do património cultural da região, merecendo destaque o desfile de corais Planície a Cantar ou o Encontro de Tocadores de Viola Campaniça e Cantadores de Despique e Baldão.",
    sources:
      "Retirado do Site “https://www.cm-castroverde.pt/pt/menu/943/feira-de-castro.aspx”, consultado em setembro 23.",
    isFeatured: true,
  },
  {
    id: "fair-09",
    title: "Feira de S. Simao",
    month: new Date("2023-10-28"),
    startDate: new Date("2023-10-28T00:00:00"),
    endDate: new Date("2023-10-29T00:00:00"),
    region: REGIONS_LABELS.north,
    district: "Vila Real",
    town1: "Chaves",
    town2: "Vidago",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description:
      "Uma Feira que conta já com mais de um século de tradição, onde os visitantes poderão encontrar deliciosas passas, castanhas, pinhões, nozes, entre muitos outros produtos típicos da época, que estarão expostos em vários stands.",
    paragraph1:
      "Nesta altura as colheitas agrícolas estão praticamente concluídas e é comum vender-se os produtos cultivados na região para saldar as dívidas contraídas durante o ano.",
    paragraph2:
      "Era esta a principal característica da feira que ainda hoje se mantém, apesar da mudança socioeconómica.",
    paragraph3: "",
    paragraph4: "",
    sources:
      "Adaptado  do livro “Guia das Mais Famosas FESTAS & ROMARIAS de Portugal, Atlântico Press.",
    isFeatured: true,
  },

  {
    id: "fair-10",
    title: "Feira de Santa Iria",
    month: new Date("2023-10-20"),
    startDate: new Date("2023-10-20T00:00:00"),
    endDate: new Date("2023-10-20T00:00:00"),
    region: REGIONS_LABELS.center,
    district: "Santarem",
    town1: "Tomar",
    town2: "Tomar",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description:
      "A Feira de Santa Iria realiza-se todos os anos em Tomar desde o século XVII. Apenas situações invulgares, como foi a pandemia em 2020 e 2021, levaram à sua interrupção.",
    paragraph1:
      "A Feira de Santa Iria realiza-se todos os anos em Tomar desde o século XVII. Apenas situações invulgares, como foi a pandemia em 2020 e 2021, levaram à sua interrupção.",
    paragraph2:
      "Habitualmente, está aberta durante dez dias, que incluem 20 de outubro, data dedicada à padroeira da cidade.",
    paragraph3:
      "Nesse dia, a imagem da Santa é levada em procissão, com a presença de grande número de crianças das escolas do concelho, que lançam pétalas ao rio, evocando o seu martírio.",
    paragraph4: "",
    sources:
      "Retirado do site “https://fairantairia.pt/index.php/2022/09/29/historia-da-feira-de-santa-iria/”, consultado em setembro 23.",
    isFeatured: true,
  },

  {
    id: "fair-11",
    title: "Festival Nacional de Gastronomia",
    month: new Date("2023-10-20"),
    startDate: new Date("2023-10-20T00:00:00"),
    endDate: new Date("2023-10-20T00:00:00"),
    region: REGIONS_LABELS.center,
    district: "Santarem",
    town1: "Santarem",
    town2: "",
    imgURL:
      "https://barlavento.sapo.pt/wp-content/uploads/2021/08/Mina-de-Sal-gema-Loul%C3%A9-01.jpg",
    description:
      "Festival promovido desde de 1981, na Casa do Campino, em Santarém onde os paladares das regiões de todo o país são expostos, numa mostra única da variada e rica gastronomia portuguesa, através de tasquinhas. ",
    paragraph1:
      "Festival promovido desde de 1981, na Casa do Campino, em Santarém onde os paladares das regiões de todo o país são expostos, numa mostra única da variada e rica gastronomia portuguesa, através de tasquinhas. ",
    paragraph2: "Também se fazem workshops culinários e provas de vinho.",
    paragraph3: "",
    paragraph4: "",
    sources:
      "Retirado do site “https://cm-sintra.pt/atualidade/agenda/1482-a-feira-das-merces-esta-de-regresso-a-sintra-2”, consultado em setembro 23.",
    isFeatured: true,
  },
];

export default FAIRS;

export function getFeaturedFairs() {
  return FAIRS.filter((event) => event.isFeatured);
}

export function getAllFairs() {
  return FAIRS;
}

export function getEventById(id) {
  return FAIRS.find((event) => event.id === id);
}

export function getFilteredFairs(dateFilter) {
  const { year, month } = dateFilter;

  let filteredFairs = TOURS.filter((fair) => {
    const fairDate = new Date(fair.date);
    return fairDate.getFullYear() === year && fairDate.getMonth() === month - 1;
  });
  return filteredFairs;
}
