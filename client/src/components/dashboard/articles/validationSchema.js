import * as Yup from 'yup';

// Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

export const formValues = {
    title:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    content:'',
    excerpt:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
    score:45,
    director:'john',
    actors:['john','jsss','ssss'],
    status:'draft'
}

export const validation = () => (
    Yup.object({
        title:Yup.string()
        .required('Sorry the title is required'),
        content:Yup.string()
        .required('Sorry the content is required')
        .min(50,'That is it ? ...write some more'),
        excerpt:Yup.string()
        .required('Sorry the excerpt is required')
        .max(500,'Sorry its 500 max'),
        score: Yup.number()
        .required('Sorry the score is required')
        .min(0,'0 is the minimum')
        .max(100,'100 is the max'),
        director:Yup.string()
        .required('Sorry the director is required'),
        actors:Yup.array()
        .required('Must have actors')
        .min(3,'Minimum is 3'),
        status:Yup.string()
        .required('Sorry the status is required')
    })
)

