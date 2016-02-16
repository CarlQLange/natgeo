Photos = new Mongo.Collection('Photos');

Countries = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Columbia',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D\'Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and Mcdonald Islands',
    'Vatican',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Democratic People\'s Republic of Korea',
    'Korea',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Lao People\'s Democratic Republic',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libyan Arab Jamahiriya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'Netherlands Antilles',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Reunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Virgin Islands',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',

    'Africa',
    'Europe',
    'South America',
    'America',
    'North America',
    'Asia',
    'Oceania',

    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "New York City",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"

];

Accounts.config({
    forbidClientAccountCreation : true
});

if (Meteor.isServer) {
    if (Meteor.users.find().count() < 2) {
        id = Accounts.createUser({
            email: 'allezberry@gmail.com',
            username: 'ellie',
            password: "ellie",
            profile: {
                name: 'ellie'
            }
        });
        Accounts.createUser({
            email: 'carl@flax.ie',
            username: 'carl',
            password: "carl",
            profile: {
                name: 'carl'
            }
        });
    }

    Meteor.publish('PhotoBatch', function () {
        var skip = Math.random() * 8376;
        return Photos.find(
            {
                is_video: false,
                categories: {$exists:false}
            },
            {
                skip: skip,
                limit: 1,
                reactive: false,
            });
    });

    Meteor.methods({
        exportData: function () {
            return Photos.find().fetch();
        },
        getTotalCount: function () {
            return Photos.find().count();
        },
        getUncategorisedCount: function () {
            return Photos.find({categories: {$exists: false}}).count();
        },
        getCategoryFrequency: function (continent, excl) {
            if (!excl) excl = [];
            var categories = [];
            if (continent != 'all') {
                categories = Photos.find({
                    categories: {
                        $exists: true,
                        $in: [continent],
                        $nin: excl
                    }
                }, {
                    fields: {
                        categories: true
                    }
                }).fetch();
            } else if (continent == 'all') {
                categories = Photos.find({
                    categories: {
                        $exists: true,
                        $nin: excl
                    }
                }, {
                    fields: {
                        categories: true
                    }
                }).fetch();
            }
            categories = _.pluck(categories, 'categories');
            for (var i in categories) {
                if (_.contains(categories[i], excl)) {
                    categories.splice(i, 1);
                }
            }
            categories = _.chain(categories)
                .flatten()
                .reduce(function(frequencies, value) {
                    frequencies[value] = frequencies[value] && frequencies[value] + 1 || 1;
                    return frequencies;
                }, {})
                .value();
            var r = [];
            _.mapObject(categories, function (v,k) {
                if (k != 'null') { //ugh
                    r.push({name: k, count: v});
                }
            });
            return r;
        }
    });
}

if (Meteor.isClient) {
    Template.export.events({
        'click #exportBtn': function () {
            Meteor.call('exportData', function (err, resp) {
                exp = JSON.stringify(resp, null, '\t');

                blob = new Blob([exp], {type: 'application/json'});
                saveAs(blob, 'export.json');
            });
        }
    });

    Template.count.helpers({
        uncategorisedCount: function () {
            return Template.instance().uncategorisedCount.get();
        },
        totalCount: function () {
            return Template.instance().totalCount.get();
        }
    });

    Template.count.created = function () {
        var self = this;
        self.totalCount = new ReactiveVar("...");
        Meteor.call('getTotalCount', function (err, asyncValue) {
            self.totalCount.set(asyncValue);
        });

        self.uncategorisedCount = new ReactiveVar("...");
        Meteor.call('getUncategorisedCount', function (err, asyncValue) {
            self.uncategorisedCount.set(asyncValue);
        });
    };

    Template.photos.helpers({
        photos: function () {
            return Photos.find({}, {reactive:false}).fetch()[0];
        }
    });

    Template.photopane.helpers({
        parsePhotographer: function (caption) {
            try {
                return caption.match(/\@([\w]*)./i)[1];
            } catch (e) {
                return false;
            }
        },
        parseDate: function (date) { return new Date(date*1000); },
        parseTags: function (caption) {
            return caption.split(' ').filter(el => {return el[0] === '#';}).join(', ');
        },
        guessCountry: function (caption) {
            if (!caption) {return "None detected";}
            var bestmatch = {country: '', distance: Infinity};
            var matches = [];

            var tag, country, distance;

            for (tag of caption.split(' ').filter(el => {return el[0] === '#';})) {
                tag = tag.replace('#', '').replace('@', '');

                for (country of Countries) {
                    distance = Levenshtein.get(tag, country);
                    if (distance === 0) {
                        matches.push(country);
                    }
                    if (distance < bestmatch.distance) {
                        bestmatch = { country: country, distance: distance};
                    }
                }
            }
            for (tag of caption.split(' ')) {
                tag = tag.replace('#', '').replace('@', '');

                for (country of Countries) {
                    distance = Levenshtein.get(tag, country);
                    if (distance === 0) {
                        matches.push(country);
                    }
                    if (distance < bestmatch.distance) {
                        bestmatch = { country: country, distance: distance};
                    }
                }
            }
            if (matches.length > 1) {
                return matches.join(', ');
            } else {
                return bestmatch.country;
            }
        }
    });

    Template.photopane.events({
        "change input[type=checkbox]": function (evt) {
            var name = evt.target.name;
            var checked = evt.target.checked;

            var categories = _.map($("#" + this._id + " :checked"), function (i) {
                return i.getAttribute('name');
            });

            Photos.update({_id: this._id}, {$set: {categories: categories}});
        }
    });

    Template.stats.created = function () {
        // ugh ugh ugh ugh ugh ugh
        var self = this;
        self.excludeCategories = new ReactiveVar([]);
        self.categoryObj = new ReactiveVar();
        self.categoryObjNA = new ReactiveVar();
        self.categoryObjSA = new ReactiveVar();
        self.categoryObjCA = new ReactiveVar();
        self.categoryObjAF = new ReactiveVar();
        self.categoryObjEU = new ReactiveVar();
        self.categoryObjRS = new ReactiveVar();
        self.categoryObjAA = new ReactiveVar();
        self.categoryObjAU = new ReactiveVar();
        self.categoryObjAT = new ReactiveVar();
        self.categoryObjME = new ReactiveVar();

        Meteor.call('getCategoryFrequency', 'all', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObj.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'northamerica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjNA.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'southamerica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjSA.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'centralamerica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjCA.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'africa' ,function (err, asyncValue) {
            self.categoryObjAF.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'europe' ,function (err, asyncValue) {
            self.categoryObjEU.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'russia', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjRS.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'asia', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjAA.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'australia', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjAU.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'antartica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjAT.set(asyncValue);
        });
        Meteor.call('getCategoryFrequency', 'middleeast', Template.instance().excludeCategories.get(), function (err, asyncValue) {
            self.categoryObjME.set(asyncValue);
        });
    };

    Template.stats.helpers({
        'categorylist': [
            {name: 'westernpeople'},
            {name: 'nonwesternpeople'},
            {name: 'ethnicdress'},
            {name: 'westerndress'},
            {name: 'subjectmale'},
            {name: 'subjectfemale'},
            {name: 'urbansetting'},
            {name: 'ruralsetting'},
            {name: 'ethnicsettlement'},
            {name: 'landscape'},
            {name: 'animalfocused'},
            {name: 'sport'}
        ],
        'categories': function (continent) {
            if (!continent) {
                return Template.instance().categoryObj.get();
            } else {
                switch (continent) {
                case 'northamerica': return Template.instance().categoryObjNA.get();
                case 'southamerica': return Template.instance().categoryObjSA.get();
                case 'centralamerica': return Template.instance().categoryObjCA.get();
                case 'africa': return Template.instance().categoryObjAF.get();
                case 'europe': return Template.instance().categoryObjEU.get();
                case 'russia': return Template.instance().categoryObjRS.get();
                case 'asia': return Template.instance().categoryObjAA.get();
                case 'antartica': return Template.instance().categoryObjAT.get();
                case 'australia': return Template.instance().categoryObjAU.get();
                case 'middleeast': return Template.instance().categoryObjME.get();
                }
            }
        }
    });

    Template.stats.events({
        'click .fieldnamebutton': function (data) {
            $(arguments[0].currentTarget).toggleClass('active');

            var nametoex = this.name;
            var excl = Template.instance().excludeCategories.get();

            if (_.contains(excl, nametoex)) {
                excl = _.without(excl, nametoex);
            } else {
                excl.push(nametoex);
            }

            Template.instance().excludeCategories.set(excl);

            self.categoryObj = Template.instance().categoryObj;
            self.categoryObjNA = Template.instance().categoryObjNA;
            self.categoryObjSA = Template.instance().categoryObjSA;
            self.categoryObjCA = Template.instance().categoryObjCA;
            self.categoryObjAF = Template.instance().categoryObjAF;
            self.categoryObjEU = Template.instance().categoryObjEU;
            self.categoryObjRS = Template.instance().categoryObjRS;
            self.categoryObjAA = Template.instance().categoryObjAA;
            self.categoryObjAU = Template.instance().categoryObjAU;
            self.categoryObjAT = Template.instance().categoryObjAT;
            self.categoryObjME = Template.instance().categoryObjME;

            Meteor.call('getCategoryFrequency', 'all', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObj.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'northamerica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjNA.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'southamerica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjSA.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'centralamerica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjCA.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'africa', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjAF.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'europe', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjEU.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'russia', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjRS.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'asia', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjAA.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'australia', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjAU.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'antartica', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjAT.set(asyncValue);
            });
            Meteor.call('getCategoryFrequency', 'middleeast', Template.instance().excludeCategories.get(), function (err, asyncValue) {
                self.categoryObjME.set(asyncValue);
            });

        }
    });
}

Router.configure({
    layoutTemplate: 'baselayout'
});
Router.route('/', function () {
    if (Meteor.userId()) {
        this.render('photos');
    } else {
        this.render('notLoggedIn');
    }
}, {
    waitOn: function(){
        return Meteor.subscribe('PhotoBatch');
    },
    fastRender: true
});
Router.route('/stats', function () {
    if (Meteor.userId()) {
        this.render('stats');
    } else {
        this.render('notLoggedIn');
    }
});
