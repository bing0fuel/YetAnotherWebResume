'use strict';

/** Boring Plain Web Resume **/

var bpwr = angular.module('bpwrApp', []);

bpwr.controller('ResumeController', ['$scope',
    function($scope) {

        /* Configure your information here */
        var Page = {
            'name': 'Your Name',
            'subtitle': 'A quick one-liner here about yourself',
            'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

            /* Start contact block */
            'contact': [
                {
                    'name': 'GitHub',
                    'link': 'https://github.com/yourusername'
                },
                {
                    'name': 'LinkedIn',
                    'link': 'http://linkedin.com/in/yourlink'
                },
                {
                    'name': 'Twitter',
                    'link': 'https://twitter.com/username'
                },
                {
                    'name': 'Mail',
                    'link': 'mailto:you@stuff.com'
                },
            ],
            /* End contact block */

            /* Start skills block */
            'skills': [
                { 'text': 'JS', 'level': 'high' },
                { 'text': 'Java', 'level': 'medium' },
                { 'text': 'Python', 'level': 'low' },
                { 'text': 'Coffee drinking', 'level': 'ultra' },
            ],

            /* Start work experience block */
            'experience': [
                {
                    'company': 'XYZ Corp',
                    'title': 'Software Engineer',
                    'location': 'San Francisco, CA',
                    'dates': '2010 - 2013',
                    'description': 'Gluten-free Pinterest adipisicing flannel nostrud, sapiente anim. Paleo chambray butcher, ugh kogi Vice consequat velit sustainable Echo Park. Post-ironic irure freegan keytar butcher, tofu cardigan Schlitz chia retro raw denim non ea. Shoreditch mustache qui eiusmod wayfarers cray cliche.',
                    'details': [
                        {
                            'text': 'Tonx Cosby sweater irure, sint adipisicing food truck art party ethical put a bird on it Portland Terry Richardson tofu.'
                        },
                        {
                            'text': 'Gluten-free dolor ex hashtag.'
                        }
                    ]
                },
                {
                    'company': 'Mindless Inc',
                    'location': 'Middle of Nowhere',
                    'title': 'Drone IV',
                    'dates': '1999 - 2009',
                    'description': 'Gluten-free Pinterest adipisicing flannel nostrud, sapiente anim. Paleo chambray butcher, ugh kogi Vice consequat velit sustainable Echo Park. Post-ironic irure freegan keytar butcher, tofu cardigan Schlitz chia retro raw denim non ea. Shoreditch mustache qui eiusmod wayfarers cray cliche.',
                },

            ],
            /* End work experience block */

            /* Start recent projects block */
            'projects': [
                {
                    'title': 'Project Runaway',
                    'tech': 'Foobars, Dunbars, and Chocolate Bars',
                    'role': 'Founder',
                    'dates': '1999 - 2013',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                },
                {
                    'title': 'Coffee Fountain',
                    'tech': 'A series of pipes',
                    'role': 'Founder & consumer',
                    'dates': '1999 - 2013',
                    'description': 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                },
            ],
            /* End recent projects block */

            /* Start education block */
            'education': [
                {
                    'name': 'Super School of the Digits',
                    'degree': 'Computer Science, MS',
                    'type': 'Graduate',
                    'dates': '2001 - 2005',
                },

                {
                    'name': 'Capital School of the Codes',
                    'degree': 'Computer Science, BS',
                    'type': 'Undergraduate',
                    'dates': '1996 - 2000',
                },
            ],
        };
        $scope.Page = Page;
    }
]);
