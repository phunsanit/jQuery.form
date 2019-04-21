$(document).ready(function() {

    let data = {};
    let formJson = $('#formJson');
    let jsonDatas = {};
    let idNo = 0;
    let playground = $('#playground');
    let html = '';

    jsonDatas['elements'] = {};

    function patternOptions() {

    }

    function patternButton() {
        idNo++;

        data.id = 'button' + idNo;

        html = '<div class="form-group" id=""><button type="button">Click Me!</button></div>';
    }

    function patternCheckbox() {
        idNo++;

        id = 'field' + idNo;

        data.id = data.name = id;

        html = '<div class="form-check" id=""><input class="form-check-input" name=' + data.name + ' type="checkbox" value="" id="' + data.id + '"><label class="form-check-label" for="' + data.id + '">Default checkbox</label></div>';

    }

    function updateJson() {
        formJson.val(JSON.stringify(jsonDatas));
    }

    playground.on({
        "mouseenter": function() {
            $(this).append('<div class="menu"><i class="fa fa-edit"></i><i class="fa fa-copy"></i><i class="fa fa-trash-alt"></i></div>')
        },
        "mouseleave": function() {
            $(this).children('.menu').remove();
        }
    }, '.form-check, .form-group');

    $('.pattern').draggable({
        cursor: 'move',
        helper: 'clone',

    });

    playground.droppable({
        accept: '.pattern',

        drop: function(event, pattern) {
            let item = pattern.draggable.clone();

            data = {
                "id": "",
                "type": item.data('type')
            };
            html = '';
    
            switch (item.data('type')) {
                case 'button':
                    {
                        patternButton();
                    }
                    break;
                case 'checkbox':
                    {
                        patternCheckbox();
                    }
                    break;
                case 'color':
                    { //color
                    }
                    break;
                case 'date':
                    { //date
                    }
                    break;
                case 'datetime-local':
                    { //datetime-local
                    }
                    break;
                case 'email':
                    { //email
                    }
                    break;
                case 'file':
                    { //file
                    }
                    break;
                case 'hidden':
                    { //hidden
                    }
                    break;
                case 'image':
                    { //image
                    }
                    break;
                case 'month':
                    { //month
                    }
                    break;
                case 'number':
                    { //number
                    }
                    break;
                case 'password':
                    { //password
                    }
                    break;
                case 'radio':
                    { //radio
                    }
                    break;
                case 'range':
                    { //range
                    }
                    break;
                case 'reset':
                    { //reset
                    }
                    break;
                case 'search':
                    { //search
                    }
                    break;
                case 'submit':
                    { //submit
                    }
                    break;
                case 'tel':
                    { //tel
                    }
                    break;
                case 'text':
                    { //text
                    }
                    break;
                case 'time':
                    { //time
                    }
                    break;
                case 'url':
                    { //url
                    }
                    break;
                case 'week':
                    { //week
                    }
                    break;
            }

            uuid = 'col1Fieldset1' + data.id;

            jsonDatas.elements[uuid] = data;
            html = html.replace('id=""', 'id="'+uuid+'"')

            $(this).append(html);

            updateJson();

        }

    });

});