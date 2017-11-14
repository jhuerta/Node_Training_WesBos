/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Other Title`;

exports.menu = [
  { slug: '/stores', title: 'Stores', icon: 'store', },
  { slug: '/tags', title: 'Tags', icon: 'tag', },
  { slug: '/top', title: 'Top', icon: 'top', },
  { slug: '/add', title: 'Add', icon: 'add', },
  { slug: '/map', title: 'Map', icon: 'map', },
];
