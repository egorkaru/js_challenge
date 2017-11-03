function sumOfTwo(array1, array2, x) {
    return array1.some(val1 => 
        array2.some(val2 =>
            val1 + val2 == x
        )
    )
}
