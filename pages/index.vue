<template>
	<div class="container">
		<div class="card-body vending-machine">
			<div class="row">
				<!-- <div class="'col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
				<div class="col-8 content content-products">
					<div class="products">
						<div class="item"><img src="/img/general/juice.png"></div>
						<div class="item"><img src="/img/general/soda.png"></div>
						<div class="item"><img src="/img/general/water.png"></div>
						<div class="item"><img src="/img/general/chocolate.png"></div>
						<div class="item"><img src="/img/general/cocacola.png"></div>
						<div class="item"><img src="/img/general/galleta.png"></div>
					</div>
				</div>
				<div class="col-4 content content-coins">
					<div class="coins">
						<h3>Coins</h3>
						<div class="items">
							<button>$ 0.5</button>
							<button>$ 0.10</button>
							<button>$ 0.25</button>
							<button>$ 1.0</button>
						</div>
					</div>
					<div class="options">
						<div>
							<label for="">Price</label>
							<input type="text">
						</div>
						<div>
							<label for="">Total</label>
							<input type="text">
						</div>
						<div>
							<button>Cancel</button>
						</div>
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
}

.products .item {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	padding: 1vh;
}

.products .item img {
	object-fit: cover;
    height: 12vh;
    width: 6vh;
}

.coins, .options{
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.options div, .options div label, .options div input{
	width: 100%;
}

.coins{
	background-color: #dc3545;
    padding: 2vh;
	margin-bottom: 2vh;
}

.coins .items{
	display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.coins .items button{
	margin-bottom: 1vh;
	width: 6vh;
}


.brand{
	background-color: #dc3545;
	width: 100%;
	height: 20vh;
}
</style>