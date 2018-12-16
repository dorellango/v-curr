import Currency from 'currency.js'
/*
* install function
* @param  {Vue} Vue
* @param  {object} options  currency.js options
*/
const VCurr = {
    install(Vue, options = {}) {
        Vue.directive('curr', function (el, binding) {
            el.innerHTML = Currency(binding.value, options).format();
        })
    }
}

export default VCurr;