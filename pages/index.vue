<template>
	<div class="container">
		<div class="card-body vending-machine">
			<div class="row">
				<div class="col-8 content content-products">
					<div class="products">
						<template v-for="item in products" :key="item.id">
							<AppImage :isSelected="item.id == product_id" :isBlock="item.amount == 0" :text="item.name" :src="'/img/general/' + item.path_img" @click="selectProduct(item)"/>
						</template>
						<div v-if="product_id != '' || disabled_content" class="disabled"></div>
					</div>
				</div>

				<div class="col-4 content content-coins">
					<div class="coins">
						<h3>Coins</h3>
						<div class="items">
							<template v-for="item in coins" :key="item.id">
								<AppButton :text="'$ ' + item.coin" :disabled="item.amount == 0" @click="insertedCoins(item.coin)" />
							</template>
						</div>
						<div v-if="product_id == '' || disabled_content" class="disabled"></div>
					</div>
					<div class="options">
						<AppInput :text="'Price'" :type="'text'" :readonly="true" :value="price" />
						<AppInput :text="'Total'" :type="'text'" :readonly="true" :value="total" />
						<AppButton :text="'Cancel'" :class="'btn btn-danger'" :disabled="coins_inserted.length != 0" @click="cancelBuy()"/>
						<AppButton :text="'Return coin'" :class="'btn btn-primary'" :disabled="coins_inserted.length == 0" @click="returnCoin()"/>
					</div>
				</div>
				<div class="col-12 content content-brand">
					<div class="brand">
						<div class="box-container">
							<AppImage v-if="img_product_selected != ''" :stylesContent="{ padding: 0, backgroundColor: 'transparent' }" :src="img_product_selected"/>
						</div>
						<div class="display_container" v-html="text_display"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import coin from '@/store/coin';
import product from '@/store/product';
import vending from '@/store/vending';

const disabled_content = ref(false);
const coins = ref([]);
const price = ref('0');
const total = ref('0');
const products = ref([]);
const product_id = ref('');
const img_product_selected = ref('');
const text_display = ref('');
const coins_inserted = ref([]);

const findCoins = async () => {
  	const response = await coin.dispatch('findAll');

	if (response.success){
		coins.value = response.data;
	}
}

const findProducts = async () => {
  	const response = await product.dispatch('findAll');

	if (response.success){
		products.value = response.data;
	}
}

const selectProduct = async (product) => {
	if (product.amount > 0){
		price.value = product.price;
		product_id.value = product.id;
	}
}

const insertedCoins = async (coin) => {
	coins_inserted.value.push(coin);
  	total.value = String((parseFloat(total.value) + parseFloat(coin)).toFixed(2));

	if (parseFloat(total.value) >= parseFloat(price.value)){
		disabled_content.value = true;
		text_display.value = 'processing purchase...';

		await executeBuy()

		price.value = '0';
		total.value = '0';
		product_id.value = '';
		coins_inserted.value = [];
		disabled_content.value = false;
	}
}

const executeBuy = async() => {
	const response = await vending.dispatch('create', {
		"product_id": product_id.value,
		"coins": coins_inserted.value
	});

	if (response.success){
		if (response.data.change.total_coins != 0){
			let change = '';
			for (let i = 0; i < response.data.change.total_coins; i++) {
				change = change + ', ' + response.data.change.coin.coin;
			}
			text_display.value =  '<b>Purchase successful</b> <br> returning change... <br> -> ' + change;

		} else {
			text_display.value =  '<b>Purchase successful</b>';
		}

		findCoins();
		findProducts();

		img_product_selected.value = '/img/general/' + response.data.product.path_img;
	} else {
		img_product_selected.value = '';
		text_display.value = response.message + ' <br> returning coins inserted... <br> -> ' + String(coins_inserted.value);
	}
}

const cancelBuy = async () => {
	if (coins_inserted.value.length == 0){
		price.value = '0';
		total.value = '0';
		product_id.value = '';
		img_product_selected.value = '';
		coins_inserted.value = [];
		text_display.value = '';
	}
}

const returnCoin = async () => {
	if (coins_inserted.value.length != 0){
		text_display.value = 'Returning coins inserted... <br> -> ' + String(coins_inserted.value);
		price.value = '0';
		total.value = '0';
		product_id.value = '';
		img_product_selected.value = '';
		coins_inserted.value = [];
	}
}

findCoins();
findProducts();

</script>

<style scoped src="./index.css"></style>