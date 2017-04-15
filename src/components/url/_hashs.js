var Hashs = function() {
    var hash = window.location.hash.replace('#', '');

    if (hash) {
        $(function onDomReady() {

            //i know this has a lot of levels,
            //but this way I can reduce the number of loops by 6
            setTimeout(function () {

                (function watchingNav() {
                    if (ChatNav.checkIsNavReady()) {
                        console.log('ready');
                        triggerWhateverIsOn(hash);

                    } else {
                        console.log('nop');
                        setTimeout(() => watchingNav(), 300);
                    }
                })();

            }, 3500); // ~ time needed on css to show all header
        });
    }

    function triggerWhateverIsOn(hash) {
        switch (hash) {
            case 'projects':
                $('#btn-pr').trigger('click');
                UtilFuncs.scrollTo($('#btn-pr').offset().top - 60)
                break;
            case 'journey':
                $('#btn-jr').trigger('click');
                UtilFuncs.scrollTo($('#btn-jr').offset().top - 60)
                break;
            // case 'knowledge':
            //     $('#btn-th').trigger('click');
            //     UtilFuncs.scrollTo($('#btn-th').offset().top - 60)
            //     break;
            // case '008080': //TODO prevent this on touch devices
            // case 'bot':
            //     $('#btn-th').trigger('click');
            //     break;
            default:
                lookIntoProjects(hash);
                break;
        }
    }

    function lookIntoProjects(hash) {

        // convert arrProjects to string, lowercase and array again.
        // and hash with spaces and lowercase to find a match on foundHashOnIndex

        var arrProjects = TalkChat.conversation.practice.projects,
            arrProjsLow = arrProjects.toLocaleString().toLowerCase().split(','),
            hashSpaces = hash.replace(/-/g,' '),
            hashSpaceLow = hashSpaces.toLowerCase(),
            foundHashOnIndex = arrProjsLow.indexOf(hashSpaceLow);

        if ( foundHashOnIndex > -1 ) {

            //if so, get the match Index and use it to target it on arrProjects.
            // this way we'r sure the correct project name (case sensitive) is passed to Projects();
            Projects.setInitialProject(arrProjects[foundHashOnIndex]);

            $('#btn-pr').trigger('click');

        } else {
            hash = hash.replace(/[^a-zA-Z ]/g, "");
            GAcustom.sendToGA(`&ec=hash&ea=${hash}`);
        }
    }


    function checkIfNavReady() {
        return ChatNav.isNavReady;
    }

    function set(newHash) {
        newHash = UtilFuncs.stringSlugLower(newHash);
        window.location.hash = newHash;
    }
    return {
        set
    }

}();
