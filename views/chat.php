<div class="chat-container">
    <nav class="Nav is-loading js-Nav">
        <h2 class="sr-only">Chat Bot sections</h2>
        <a href="#projects" class="Nav-item js-NavItem js-chatSection"
            data-section="practice" data-gaec="chatNavL"
            aria-expanded="false"
            <?php /*aria-controls="practice" */ ?> >
            Projects
        </a>

        <a href="#journey" class="Nav-item js-NavItem js-chatSection"
            data-section="journey" data-gaec="chatNavL"
            aria-expanded="false"
            <?php /*aria-controls="journey" */ ?> >
            Journey
        </a>

        <button name="button" class="Nav-item js-NavItem js-botTrigger"
            data-gaec="chatNavL" aria-label="About - This is a chat with me where I explain how I was built technically. Despite being the part that most of users love more, unfortunately it's the worse part of me for users like you. I'm sorry about that, I'm working on it!">
            About
        </button>
    </nav>

    <div class="navCV" aria-hidden="true">
        <a href="#cv" class="navCV-link" data-gaec="navCV">Let's cut the bullshit. Who is she?</a>
    </div>

    <div class="chat" id="chat"> <!-- js --> </div>
</div>
