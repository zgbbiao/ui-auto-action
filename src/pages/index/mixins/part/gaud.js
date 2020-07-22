/*
 * @Author: your name
 * @Date: 2020-07-22 21:24:18
 * @LastEditTime: 2020-07-22 22:37:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-auto-action\src\pages\index\mixins\part\gaud.js
 */
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('index', ['setGet'])
  },
  methods: {
    ...mapActions('index', ['setAdd', 'setDelete', 'setUpdate'])
  }
}
