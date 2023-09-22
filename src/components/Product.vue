<script setup>
import {useRoute} from 'vue-router'
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'

const product = reactive({})
const route = useRoute()
const id = route.params.id
onBeforeMount(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(res=>{
            product.title = res.data.title
            product.price = res.data.price
            product.description = res.data.description
            product.price = res.data.price
            product.stock = res.data.stock
            product.brand = res.data.brand
            product.category = res.data.category
            product.thumbnail = res.data.thumbnail
        })
})
</script>

<template>
    <section class="py-5 bg-gray-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <div class="card card-blog card-plain">
              <div class="card-header position-relative z-index-2">
                <a class="blur-shadow-image">
                  <img :src="product.thumbnail" alt="img-blur-shadow" class="img-fluid border-radius-lg">
                </a>
              </div>
              <div class="card-body px-0 pt-4">
                <p class="text-gradient text-primary text-gradient font-weight-bold text-sm text-uppercase">{{ product.brand }}</p>
                <a href="javascript:;">
                  <h4>
                    {{ product.title }}
                  </h4>
                </a>
                <p>
                  {{ product.description }}
                </p>
                <p>
                  <h5>{{ product.price }}$</h5>
                </p>
                <p>
                  <h6>Stock : {{ product.stock }} pcs</h6>
                </p>
                <button type="button" class="btn bg-gradient-primary mt-3">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>

</style>