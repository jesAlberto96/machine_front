<template>
	<div class="container">
		<div class="card-body vending-machine">
			<div class="row">
				<!-- <div class="'col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
				<div class="col-8 content content-products">
					<div class="products">
						<template v-for="item in products" :key="item.id">
							<AppImage :text="item.name" :src="'/img/general/' + item.path_img" @click="selectProduct(item)"/>
						</template>
						<!-- <div class="disabled"></div> -->
					</div>
				</div>

				<div class="col-4 content content-coins">
					<div class="coins">
						<h3>Coins</h3>
						<div class="items">
							<template v-for="item in coins" :key="item.id">
								<AppButton :text="'$ ' + item.coin" :disabled="item.amount == 0" @click="putCoins(item.coin)" />
							</template>
						</div>
						<!-- <div class="disabled"></div> -->
					</div>
					<div class="options">
						<AppInput :text="'Price'" :type="'text'" :readonly="true" :value="price" />
						<AppInput :text="'Total'" :type="'text'" :readonly="true" :value="total" />
						<AppButton :text="'Cancel'"/>
					</div>
				</div>
				<div class="col-12 content content-brand">
					<div class="brand">

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

const coins = ref([]);
const price = ref('0');
const total = ref('0');
const products = ref([]);
const product_selected = ref([]);

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
  	price.value = product.price;
}

const putCoins = async (coin) => {
  	total.value = String((parseFloat(total.value) + parseFloat(coin)));
}

findCoins();
findProducts();

</script>

<style scoped>

.container{
	margin-top: 4vh;
	max-width: 70vh;
}
.vending-machine{
	padding: 3vh;
	border-radius: 8%;
    height: auto;
    background: black;
}

.content{
    padding: 2vh;
}

.content-coins{
	color: #ffffff;
}

.products {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 10px;
	row-gap: 1em;
	background-color: #dc3545;
    padding: 2vh;
	position: relative;
}

.products .disabled, .coins .disabled {
	position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
	background-color: #141619d1;
}

.coins{
	background-color: #dc3545;
    padding: 2vh;
	margin-bottom: 2vh;
	position: relative;
}

.coins, .options{
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.coins .items{
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.brand{
	background-color: #dc3545;
	width: 100%;
	height: 20vh;
}
</style>