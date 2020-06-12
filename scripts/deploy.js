const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'shabbosweather.git',
        user: {
            name: 'rafistrauss',
            email: 'rafikis75@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
