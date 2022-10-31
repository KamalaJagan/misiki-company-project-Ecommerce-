<script>
    let items = [
        {
            name:'Kamalakanta',
            age: 23

        },
        {
            name:'Pratap',
            age: 23

        },{
            name:'Swadesh',
            age: 23

        },
    ]
</script>

<ul>
    {#each items as item , ix}
    <li>
       {ix+1} {item.name} : {item.age}
    </li>
    {/each}
</ul>