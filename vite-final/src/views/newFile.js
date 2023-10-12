import { mapState, mapActions } from 'pinia';
import cartStore from '../stores/cart';

export default (await import('vue')).defineComponent({
data() {
},
components: {
RouterView, RouterLink,
},
computed: {
...mapState(cartStore, ['cart'])
},
methods: {
...mapActions(cartStore, ['getCart']),
...mapActions(cartStore, ['deleteItem']),
...mapActions(cartStore, ['adjustmentTicket'])
},

mounted() {

this.getCart();

}
});
