$(document).foundation();
var app = angular.module('MvP-Timer', ['timer']);
app.controller('myCtrl', function($scope, $filter) {
  $scope.newMvp = { time: new Date() };
  var timeExceptions = {'-1': '1 hour after maintenance', '-2': 'summon required', '-3': 'only clans with castle', '-4': 'between 90 and 150 minutes'};
  $scope.mvpArr = [
    { name: 'Orc Herói', lvl: 50, time: 60, map: 'gef_fild03', difficulty: 'easy' },
    { name: 'Maya', lvl: 55, time: 120, map: 'anthell02', difficulty: 'easy' },
    { name: 'Senhor dos Orcs', lvl: 55, time: 120, map: 'gef_fild10', difficulty: 'easy' },
    { name: 'Besouro-Ladrão Dourado', lvl: 65, time: 60, map: 'prt_sewb4', difficulty: 'easy' },
    { name: 'Eddga', lvl: 65, time: 120, map: 'pay_fild10', difficulty: 'easy' },
    { name: 'Osíris', lvl: 68, time: 60, map: 'moc_pryd04', difficulty: 'medium' },
    { name: 'Freeoni', lvl: 71, time: 120, map: 'moc_fild17', difficulty: 'easy' },
    { name: 'Doppelganger', lvl: 77, time: 120, map: 'gef_dun02', difficulty: 'medium' },
    { name: 'Abelha Rainha', lvl: 78, time: 120, map: 'mjolnir_04', difficulty: 'medium' },
    { name: 'Flor do Luar', lvl: 79, time: 60, map: 'pay_dun04', difficulty: 'easy' },
    { name: 'Lady Tanee', lvl: 80, time: 420, map: 'ayo_dun02', difficulty: 'easy' },
    { name: 'Bafomé', lvl: 81, time: 120, map: 'prt_maze03', difficulty: 'medium' },
    { name: 'Faraó', lvl: 85, time: 60, map: 'in_sphinx5', difficulty: 'medium' },
    { name: 'Kublin', lvl: 85, time: -1, map: 'schg_dun01,arug_dun01', difficulty: 'easy' },
    { name: 'Drake', lvl: 91, time: 120, map: 'treasure02', difficulty: 'medium' },
    { name: 'Cavaleiro da Tempestade', lvl: 92, time: 60, map: 'xmas_dun02', difficulty: 'easy' },
    { name: 'Boitatá', lvl: 93, time: 120, map: 'bra_dun02', difficulty: 'easy' },
    { name: 'Leak', lvl: 94, time: 120, map: 'dew_dun01', difficulty: 'medium' },
    { name: 'Senhor dos Mortos', lvl: 96, time: 60, map: 'gl_chyard', difficulty: 'medium' },
    { name: 'Gorynych', lvl: 97, time: 120, map: 'mosk_dun03', difficulty: 'easy' },
    { name: 'Lady Branca', lvl: 97, time: 116, map: 'lou_dun03', difficulty: 'medium' },
    { name: 'Hatii', lvl: 98, time: 120, map: 'xmas_fild01', difficulty: 'easy' },
    { name: 'Ktullanux', lvl: 98, time: 120, map: 'ice_dun03', difficulty: 'hard' },
    { name: 'Memória de Thanatos', lvl: 99, time: 120, map: 'Torre de Thanatos', difficulty: 'hard' },
    { name: 'Superaprendiz', lvl: 99, time: 120, map: 'teg_dun02', difficulty: 'medium' },
    { name: 'RSX-0806', lvl: 100, time: 165, map: 'teg_dun01', difficulty: 'medium' },
    { name: 'Samurai Encarnado', lvl: 100, time: 91, map: 'ama_dun03', difficulty: 'medium' },
    { name: 'Serpente Suprema', lvl: 105, time: 94, map: 'gon_dun03', difficulty: 'medium' },
    { name: 'Tao Gunka', lvl: 110, time: 300, map: 'beach_dun', difficulty: 'easy' },
    { name: 'General Tartaruga', lvl: 110, time: 60, map: 'tur_dun04', difficulty: 'medium' },
    { name: 'Atroce (ra_fild03)', lvl: 113, time: 180, map: 'ra_fild03', difficulty: 'medium' },
    { name: 'Atroce (ra_fild04)', lvl: 113, time: 300, map: 'ra_fild04', difficulty: 'medium' },
    { name: 'Atroce (ve_fild01)', lvl: 113, time: 180, map: 've_fild01', difficulty: 'medium' },
    { name: 'Atroce (ve_fild02)', lvl: 113, time: 360, map: 've_fild02', difficulty: 'medium' },
    { name: 'Kraken', lvl: 124, time: 120, map: 'iz_dun05', difficulty: 'hard' },
    { name: 'Kiel-D-01', lvl: 125, time: 120, map: 'kh_dun02', difficulty: 'hard' },
    { name: 'Vesper', lvl: 128, time: 120, map: 'jupe_core', difficulty: 'hard' },
    { name: 'Detardeurus', lvl: 135, time: 180, map: 'abyss_03', difficulty: 'hard' },
    { name: 'Bispo Decadente', lvl: 138, time: 120, map: 'abbey02', difficulty: 'crazy' },
    { name: 'Pesar Noturno', lvl: 139, time: 300, map: 'ra_san05', difficulty: 'hard' },
    { name: 'Rainha Scaraba', lvl: 140, time: 120, map: 'dic_dun02', difficulty: 'medium' },
    { name: 'Rainha Scaraba Dourada', lvl: 140, time: 120, map: 'dic_dun03', difficulty: 'crazy' },
    { name: 'Amon Ra do Pesadelo', lvl: 145, time: 60, map: 'moc_prydn2', difficulty: 'hard' },
    { name: 'Egnigem Cenia', lvl: 141, time: 120, map: 'lhz_dun02', difficulty: 'hard' },
    { name: 'Valquíria Randgris', lvl: 141, time: 480, map: 'odin_tem03', difficulty: 'crazy' },
    { name: 'Pyuriel Furiosa', lvl: 141, time: 480, map: 'gld2_prt', difficulty: 'crazy' },
    { name: 'General Daehyon', lvl: 142, time: 480, map: 'gld2_pay', difficulty: 'medium' },
    { name: 'Gioia', lvl: 146, time: 480, map: 'gld2_ald', difficulty: 'hard' },
    { name: 'Ifrit', lvl: 146, time: 660, map: 'thor_v03', difficulty: 'crazy' },
    { name: 'Bafomé Amaldiçoado', lvl: 154, time: 120, map: 'gl_cas02_', difficulty: 'medium' },
    { name: 'Morroc Ferido', lvl: 151, time: 660, map: 'moc_fild22', difficulty: 'hard' },
    { name: 'Algoz Eremes', lvl: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Sumo Sacerdotisa Margaretha', lvl: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Atiradora de Elite Cecil', lvl: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Arquimaga Kathryne', lvl: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Lorde Seyren', lvl: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' }
  ];

  var deadMvps = JSON.parse(localStorage.getItem('deadMvps'));
  $scope.deadMvps = deadMvps ? loadDeadMvps(deadMvps) : [];

  $scope.addMvpTimer = function(){
    var mvp = $scope.newMvp.obj;
    var died = $scope.newMvp.time;
    var rebirth = new Date(died.getTime() + mvp.time * 60000);
    var interval = (rebirth - new Date())/1000;
    interval = (interval < 0) ? 0 : interval;

    $scope.deadMvps.push({obj: mvp, died: died, rebirth: rebirth, interval: interval, finished: false});
    localStorage.setItem('deadMvps', angular.toJson($scope.deadMvps));
    $scope.newMvp = { time: new Date() };
  };

  $scope.removeMvpTimer = function(i){
    $scope.deadMvps.splice(i, 1);
    localStorage.setItem('deadMvps', angular.toJson($scope.deadMvps));
  };

  $scope.timerDone = function(mvp){
    mvp.finished = true;
    var audio = new Audio('sound/pop.mp3');
    audio.play();
  };

  function loadDeadMvps(mvps){
    mvps.forEach(function(mvp){
      mvp.interval = (new Date(mvp.rebirth) - new Date())/1000;
      mvp.interval = (mvp.interval < 0) ? 0 : mvp.interval;
    });

    return mvps;
  }
});
