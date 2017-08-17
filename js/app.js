$(document).foundation();
var app = angular.module('MvP-Timer', ['timer']);
app.controller('myCtrl', function($scope, $filter) {
  $scope.newMvp = { time: new Date() };
  var timeExceptions = {'-1': '1 hour after maintenance', '-2': 'summon required', '-3': 'only clans with castle', '-4': 'between 90 and 150 minutes'};
  $scope.mvpArr = [
    { name: 'Orc Herói', nv: 50, time: 60, map: 'gef_fild03', difficulty: 'easy' },
    { name: 'Maya', nv: 55, time: 120, map: 'anthell02', difficulty: 'easy' },
    { name: 'Senhor dos Orcs', nv: 55, time: 120, map: 'gef_fild10', difficulty: 'easy' },
    { name: 'Besouro-Ladrão Dourado', nv: 65, time: 60, map: 'prt_sewb4', difficulty: 'easy' },
    { name: 'Eddga', nv: 65, time: 120, map: 'pay_fild10', difficulty: 'easy' },
    { name: 'Osíris', nv: 68, time: 60, map: 'moc_pryd04', difficulty: 'medium' },
    { name: 'Freeoni', nv: 71, time: 120, map: 'moc_fild17', difficulty: 'easy' },
    { name: 'Doppelganger', nv: 77, time: 120, map: 'gef_dun02', difficulty: 'medium' },
    { name: 'Abelha Rainha', nv: 78, time: 120, map: 'mjolnir_04', difficulty: 'medium' },
    { name: 'Flor do Luar', nv: 79, time: 60, map: 'pay_dun04', difficulty: 'easy' },
    { name: 'Lady Tanee', nv: 80, time: 420, map: 'ayo_dun02', difficulty: 'easy' },
    { name: 'Bafomé', nv: 81, time: 120, map: 'prt_maze03', difficulty: 'medium' },
    { name: 'Faraó', nv: 85, time: 60, map: 'in_sphinx5', difficulty: 'medium' },
    { name: 'Kublin', nv: 85, time: -1, map: 'schg_dun01,arug_dun01', difficulty: 'easy' },
    { name: 'Drake', nv: 91, time: 120, map: 'treasure02', difficulty: 'medium' },
    { name: 'Cavaleiro da Tempestade', nv: 92, time: 60, map: 'xmas_dun02', difficulty: 'easy' },
    { name: 'Boitatá', nv: 93, time: 120, map: 'bra_dun02', difficulty: 'easy' },
    { name: 'Leak', nv: 94, time: 120, map: 'dew_dun01', difficulty: 'medium' },
    { name: 'Senhor dos Mortos', nv: 96, time: 60, map: 'gl_chyard', difficulty: 'medium' },
    { name: 'Gorynych', nv: 97, time: 120, map: 'mosk_dun03', difficulty: 'easy' },
    { name: 'Lady Branca', nv: 97, time: 116, map: 'lou_dun03', difficulty: 'medium' },
    { name: 'Hatii', nv: 98, time: 120, map: 'xmas_fild01', difficulty: 'easy' },
    { name: 'Ktullanux', nv: 98, time: 120, map: 'ice_dun03', difficulty: 'hard' },
    { name: 'Memória de Thanatos', nv: 99, time: 120, map: 'Torre de Thanatos', difficulty: 'hard' },
    { name: 'Superaprendiz', nv: 99, time: 120, map: 'teg_dun02', difficulty: 'medium' },
    { name: 'RSX-0806', nv: 100, time: 165, map: 'teg_dun01', difficulty: 'medium' },
    { name: 'Samurai Encarnado', nv: 100, time: 91, map: 'ama_dun03', difficulty: 'medium' },
    { name: 'Serpente Suprema', nv: 105, time: 94, map: 'gon_dun03', difficulty: 'medium' },
    { name: 'Tao Gunka', nv: 110, time: 300, map: 'beach_dun', difficulty: 'easy' },
    { name: 'General Tartaruga', nv: 110, time: 60, map: 'tur_dun04', difficulty: 'medium' },
    { name: 'Atroce (ra_fild03)', nv: 113, time: 180, map: 'ra_fild03', difficulty: 'medium' },
    { name: 'Atroce (ra_fild04)', nv: 113, time: 300, map: 'ra_fild04', difficulty: 'medium' },
    { name: 'Atroce (ve_fild01)', nv: 113, time: 180, map: 've_fild01', difficulty: 'medium' },
    { name: 'Atroce (ve_fild02)', nv: 113, time: 360, map: 've_fild02', difficulty: 'medium' },
    { name: 'Kraken', nv: 124, time: 120, map: 'iz_dun05', difficulty: 'hard' },
    { name: 'Kiel-D-01', nv: 125, time: 120, map: 'kh_dun02', difficulty: 'hard' },
    { name: 'Vesper', nv: 128, time: 120, map: 'jupe_core', difficulty: 'hard' },
    { name: 'Detardeurus', nv: 135, time: 180, map: 'abyss_03', difficulty: 'hard' },
    { name: 'Bispo Decadente', nv: 138, time: 120, map: 'abbey02', difficulty: 'crazy' },
    { name: 'Pesar Noturno', nv: 139, time: 300, map: 'ra_san05', difficulty: 'hard' },
    { name: 'Rainha Scaraba', nv: 140, time: 120, map: 'dic_dun02', difficulty: 'medium' },
    { name: 'Rainha Scaraba Dourada', nv: 140, time: 120, map: 'dic_dun03', difficulty: 'crazy' },
    { name: 'Amon Ra do Pesadelo', nv: 145, time: 60, map: 'moc_prydn2', difficulty: 'hard' },
    { name: 'Egnigem Cenia', nv: 141, time: 120, map: 'lhz_dun02', difficulty: 'hard' },
    { name: 'Valquíria Randgris', nv: 141, time: 480, map: 'odin_tem03', difficulty: 'crazy' },
    { name: 'Pyuriel Furiosa', nv: 141, time: 480, map: 'gld2_prt', difficulty: 'crazy' },
    { name: 'General Daehyon', nv: 142, time: 480, map: 'gld2_pay', difficulty: 'medium' },
    { name: 'Gioia', nv: 146, time: 480, map: 'gld2_ald', difficulty: 'hard' },
    { name: 'Ifrit', nv: 146, time: 660, map: 'thor_v03', difficulty: 'crazy' },
    { name: 'Bafomé Amaldiçoado', nv: 154, time: 120, map: 'gl_cas02_', difficulty: 'medium' },
    { name: 'Morroc Ferido', nv: 151, time: 660, map: 'moc_fild22', difficulty: 'hard' },
    { name: 'Algoz Eremes', nv: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Sumo Sacerdotisa Margaretha', nv: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Atiradora de Elite Cecil', nv: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Arquimaga Kathryne', nv: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' },
    { name: 'Lorde Seyren', nv: 160, time: -4, map: 'lhz_dun03', difficulty: 'crazy' }
  ];

  var deadMvps = JSON.parse(localStorage.getItem('deadMvps'));
  $scope.deadMvps = deadMvps ? loadDeadMvps(deadMvps) : [];

  $scope.addMvpTimer = function(){
    var mvp = $scope.newMvp.obj;
    var died = $scope.newMvp.time;
    var rebirth = new Date(died.getTime() + mvp.time * 60000);
    var interval = (rebirth - new Date())/1000;

    $scope.deadMvps.push({name: mvp.name, died: died, rebirth: rebirth, interval: interval, finished: false});
    localStorage.setItem('deadMvps', JSON.stringify($scope.deadMvps));
    $scope.newMvp = { time: new Date() };
  };

  $scope.removeMvpTimer = function(i){
    $scope.deadMvps.splice(i, 1);
    localStorage.setItem('deadMvps', JSON.stringify($scope.deadMvps));
  };

  $scope.timerDone = function(mvp){
    mvp.finished = true;
    var audio = new Audio('sound/alert.mp3');
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
