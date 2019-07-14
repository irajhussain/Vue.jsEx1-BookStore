var app = new Vue({
    el: "#bookStore",
    data: {
        store: [],
    },
    methods: {
        fetchData: function () {
            fetch("https://api.myjson.com/bins/zyv02")
                .then(res => {
                    //                            console.log(res)
                    return res.json();
                })
                .then(data => {
                    this.store = data.books;
                    console.log(this.store)
                    //this.displayImg(data.books, "books");
                }).catch(error => console.log(error));
        },
    },
    created() {
        this.fetchData()
    }
})
