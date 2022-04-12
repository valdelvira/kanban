/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Función de busqueda binaria dentro de un array
 */
let search = (nums, target) => {
    //definimos los limites del array donde buscar
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        //definimos el punto medio del array
        const middle = Math.floor((left + right) / 2)
        //obtengo el valor del elemento en el punto medio
        const current = nums[middle]
        //si el valor del elemento en el punto medio es igual al target
        if (current < target) {
            //definimos el nuevo limite izquierdo
            left = middle + 1
            //si el valor del elemento en el punto medio es mayor al target
        } else if (current > target) {
            //definimos el nuevo limite derecho
            right = middle - 1

        } else {
            //si el valor del elemento en el punto medio es igual al target
            return middle
        }

    }
    return -1
};


