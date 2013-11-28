sysadminId = null;
janedoeId = null;
johndoeId = null;
topicId = null;

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    // crate our administrator
    sysadminId = Accounts.createUser({
      _id: 'sysadmin',
      username: 'sysadmin',
      password: 'sysadmin',
      role: 'Admin',
      email: 'sysadmin@test.org',
      profile: {
        name: 'System Administrator',
        avatar: '/images/icons/Default_User.jpg'
      }
    });
    console.info('Account created: ' + sysadminId);

    // crate our administrator
    janedoeId = Accounts.createUser({
      username: 'janedoe',
      password: 'janedoe',
      email: 'janedoe@test.org',
      profile: {
        name: 'Jane Doe',
        role: 'User',
        avatar: '/images/icons/Default_User.jpg'
      }
    });
    console.info('Account created: ' + janedoeId);


    // crate our administrator
    johndoeId = Accounts.createUser({
      username: 'johndoe',
      password: 'johndoe',
      email: 'johndoe@test.org',
      profile: {
        name: 'John Doe',
        role: 'User',
        avatar: '/images/icons/Default_User.jpg'
      }
    });
    console.info('Account created: ' + johndoeId);
  }

  if (Topics.find().count() === 0) {
    console.info('no topics in database!  adding some default users');

    // crate our administrator
    topicId = Topics.insert({
      topic: 'Welcome to your new GroupThink Forum.',
      creatorId: sysadminId,
      createdBy: 'The Dev Team',
      cratedAt: new Date(),
      posts: 3,
      views: 0,
      lastPostId: johndoeId,
      lastPostAt: new Date()
    });
    console.info('topicId: ' + topicId);
  }

  if (Posts.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var postId = null;

    // crate our administrator
    postId = Posts.insert({
      creatorId: janedoeId,
      topicId: topicId,
      text: 'Lorem ipsum...',
      image: '',
      tags: []
    });
    console.info('postId: ' + postId);

    // crate our administrator
    postId = Posts.insert({
      creatorId: johndoeId,
      topicId: topicId,
      text: 'The quick brown fox...',
      image: '',
      tags: []
    });
    console.info('postId: ' + postId);


    // crate our administrator
    postId = Posts.insert({
      creatorId: janedoeId,
      topicId: topicId,
      text: 'A tisket, a tasket...',
      image: '',
      tags: []
    });
    console.info('postId: ' + postId);

  }
});