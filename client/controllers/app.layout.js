Meteor.startup(function(){
  if(Meteor.userId()){
    setWallpaper();
  }else{
    removeWallpapers();
  }
});

setWallpaper = function(){
  var user = Meteor.user();
  if(user.profile && user.profile.wallpaper){
    $('html').addClass(Meteor.user().profile.wallpaper);
  }
};

removeWallpapers = function(){
  $('html').removeClass('noWallpaper');
  $('html').removeClass('greenWallpaper');
  $('html').removeClass('pinkWallpaper');
  $('html').removeClass('blueWallpaper');
  $('html').removeClass('rainbowWallpaper');
};




