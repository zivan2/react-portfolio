let axios = require('axios').default

function Footer(props) {
    return (
        <div>
            <p>@COPYRIGHT DON'T COPY THIS</p>
            <p><a href="mailto: pyrat32@gmail.com">Email Me</a></p>
            <p><a href="" onClick={e => {
                e.preventDefault()
                axios.get('https://api.thecatapi.com/v1/images/search?size=full&api_key=dc8be8a3-bed2-4dae-8814-5b2945e52120')
                .then(r => window.location = r.data[0].url)
            }}>Ok cool. Now show me the cat.</a></p>
        </div>
    )
}

export default Footer