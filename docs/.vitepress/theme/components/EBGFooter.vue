<template>
  <footer>
    <div class="meta">
      <div id="copyrights">
        <p>
          {{ copyRights }}
        </p>
      </div>
      <div class="footer-element">
        <!-- place holder -->
      </div>
      <div class="footer-element">
        <div>
          <h3>RÉSEAUX</h3>
          <ul>
            <li v-for="item of medias">
              <a :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-element">
        <div>
          <h3>CONTACT</h3>
          <span>{{contact}}</span>
        </div>
      </div>
    </div>
    <div class="meta">
      <span class="reminder">
        {{ fanMessage }}
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IMedia } from '../models/Media'

export default defineComponent({
  name: 'EBGFooter',
  props: ['title'],
  data () {
    return {
      copyRights: '© 2023 Larian Studios. All rights reserved. Larian Studios is a registered trademark of arrakis nv, affiliate of Larian Studios Games ltd. All company names, brand names, trademarks and logos are the property of their respective owners. © 2020 Wizards of the coast. All rights reserved. Wizards of the coast, Baldur’s Gate, Dungeons & Dragons, D&D, and their respective logos. Are registered trademarks of wizards of the coast LLC',
      fanMessage: `${this.title} est un site de FAN.`,
      medias: <IMedia> [
        {
          name: 'Twitter',
          url: 'https://twitter.com/ChipsRisu'
        },
        {
          name: 'Twitch',
          url: 'https://www.twitch.tv/chipsrisu'
        }
      ],
      contact: 'chipsrisu@gmail.com'
    }
  }
})
</script>

<style scoped>
footer {
  background: linear-gradient(rgba(44, 20, 9, 0.9), rgba(63, 27, 23, 0.8), black), url("../assets/leather.jpg") no-repeat fixed transparent;

  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem 3rem;

  text-align: left;
  font-size: 10px;

  border-top: 2px groove #1f0c05;
}

footer .meta {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

footer .meta #copyrights {
  width: 40%;
}

footer .meta .footer-element {
  min-width: 5%;
}

footer .meta span.reminder {
  width: 100%;
  text-align: center;
}

ul li a {
  color: inherit;
}
</style>
