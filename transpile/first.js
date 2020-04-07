let articles = {}

articles.latestItem=[
    {
        name:'About Js',
        price:878
    },
    {
        name:'About React',
        price:776
    }
]

articles.find =(table) => {return `Select * from ${table}`}

//module.exports = articles;
export default articles;