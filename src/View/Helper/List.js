import CAmerica from '../../Assets/Heros/cAmerica.png';
import VNegro from '../../Assets/Heros/canarioNegro.png';
import IronMan from '../../Assets/Heros/IronMan.png';
import soldadoInvernal from '../../Assets/Heros/soldadoInvernal.png';

import Loki from '../../Assets/Series/Loki.jpg';

export const HeroList = [
        {
            id: '1',
            title: 'Capitão América',
            name: 'Sam Wilson',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/cap_ons_crd_01.jpg',
            image: CAmerica,
            description: 'Quando Steve Rogers pediu ajuda ao veterano da Força Aérea Sam Wilson, Wilson concordou imediatamente. Ele vestiu o traje de vôo que usou em combate para se tornar o Falcão, o que o colocou no caminho para se tornar um Vingador e, eventualmente, Capitão América.',

        },
        {
            id: '2',
            title: 'Viúva Negra',
            name: 'Natasha Romanoff',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/scarlet_ons_crd_01.jpg',
            image: VNegro,
            description: 'Confiada por alguns e temida pela maioria, a Viúva Negra se esforça para compensar o mal que fez no passado ajudando o mundo, mesmo que isso signifique sujar as mãos no processo.',

        },
        {
            id: '3',
            title: 'IronMan',
            name: 'Tony Stark',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
            image: IronMan,
            description: 'O inventor Tony Stark aplica seu gênio em soluções de alta tecnologia para problemas como o Homem de Ferro, o Vingador blindado.',

        },
        {
            id: '4',
            title: 'Pantera Negra   ',
            name: "T'Challa'",
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_crd_02.jpg',
            image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_ons_cut_mob_01_2.jpg',
            description: 'Como rei da nação africana de Wakanda, TChalla protege seu povo como o último de uma linha legada de guerreiros Panteras Negras.'
        },
        {
            id: '5',
            title: 'Soldado Inveral',
            name: 'Bucky',
            cardImage: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/015wsb_ons_crd_03.jpg",
            image: soldadoInvernal,
            description: 'James Buchanan “Bucky” Barnes se alista para lutar na Segunda Guerra Mundial, mas acaba literalmente caindo na batalha. Infelizmente, o malvado Arnim Zola o recupera e apaga sua memória, transformando-o em um assassino altamente treinado chamado Soldado Invernal.',
        },
        {
            id: '6',
            title: 'Capitão América',
            name: 'Steve Rogers',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_crd_03.jpg',
            image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_ons_cut_mob_01_1.jpg',
            description: 'O Super Soldado da Segunda Guerra Mundial da América continua sua luta no presente como um Vingador e incansável sentinela da liberdade.',
        },
        {
            id: '7',
            title: 'Hawkey',
            name: 'Clint Barton',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_crd_02.jpg',
            image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/018hcb_ons_cut_mob_01_1.jpg',
            description: 'Um atirador e lutador especialista, Clint Barton usa seus talentos ao trabalhar para a SHIELD como um agente especial. O arqueiro conhecido como Hawkeye também possui uma forte bússola moral que às vezes o desvia de suas ordens diretas.',
        },
        {
            id: '8',
            title: 'Visão',
            name: 'Visão',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_crd_01-1.jpg',
            image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_ons_cut_mob_01_1.jpg',
            description: 'Um ser totalmente único, a Visão surgiu graças a uma combinação de Vibranium Wakandan, relâmpago Asgardiano, uma Pedra do Infinito e muito mais.',
        },
        {
            id: '9',
            title: 'Homem Aranha',
            name: 'Peter Parker',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg',
            image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_cut_mob_01_6.jpg',
            description: 'Com incríveis habilidades de aranha, o adolescente gênio da ciência Peter Parker luta contra o crime e sonha em se tornar um Vingador como o Homem-Aranha.',
        },
        {
            id: '10',
            title: 'Wanda Maximoff',
            name: 'Wanda Maximoff',
            cardImage: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_crd_02.jpg',
            image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/012scw_ons_cut_mob_02.jpg',
            description: 'Notavelmente poderosa, Wanda Maximoff lutou contra e com os Vingadores, tentando aprimorar suas habilidades e fazer o que ela acredita ser certo para ajudar o mundo.',
        },



    ];

export const SerieList = [
    {
        id: '1',
        title: 'Loki',
        name: '',
        image: Loki,
    },
    {
        id: '2',
        title: 'M.O.D.O.K',
        name: '',
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/modok_lob_crd-02_1.jpg',
    },
    {
        id: '3',
        title: 'Falcão e Soldado Invernal',
        name: '',
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/falcws_lob_crd_03.jpg',
    },
    {
        id: '4',
        title: 'Wanda Vision',
        name: '',
        image: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/wandavision_lob_crd_06.jpg',
    },
]