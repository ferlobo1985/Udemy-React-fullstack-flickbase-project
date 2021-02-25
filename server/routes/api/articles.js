const express  = require('express');
let router = express.Router();
const { checkLoggedIn } = require('../../middleware/auth');
const { grantAccess } = require('../../middleware/roles');
const { sortArgsHelper } = require('../../config/helpers');

// model 
const { Article } = require('../../models/article_model');
const { Category } = require('../../models/category_model');

// add single article - DONE
// admin get,patch,delete single article (draft or public) - DONE
// get articles no auth - 
// fetch articles load more
// fetch articles, with pagination


router.route('/admin/add_articles')
.post(checkLoggedIn,grantAccess('createAny','article'),async(req,res)=>{
    try{
        //// run some other code to validate
        const article = new Article({
            ...req.body,
            score:parseInt(req.body.score)
        });
        const result = await article.save();
        res.status(200).json(result)
    } catch(error){
        res.status(400).json({message:'Error adding article',error: error })
    }
});


router.route("/admin/:id")
.get(checkLoggedIn,grantAccess('readAny','article'),async(req,res)=>{
    try{
        const _id = req.params.id;
        const article = await Article.findById(_id);
        if(!article || article.length === 0){
            return  res.status(400).json({message:'Article not found'});
        }
        res.status(200).json(article);
    } catch(error){
        res.status(400).json({message:'Error fetching article',error});
    }
})
 .patch(checkLoggedIn,grantAccess('updateAny','article'),async(req,res)=>{
     try{
        const _id = req.params.id;
        const article = await Article.findOneAndUpdate(
            {_id},
            {
                "$set": req.body
            },  
            {
                new:true
            }
        );
        if(!article) return res.status(400).json({message:'Article not found'});
        res.status(200).json(article);
    } catch(error){
        res.status(400).json({message:'Error updating article',error});
    }
})
.delete(checkLoggedIn,grantAccess('deleteAny','article'),async(req,res)=>{
    try{
        const _id = req.params.id;
        const article = await Article.findByIdAndRemove(_id);
        if(!article) return res.status(400).json({message:'Article not found'});
        res.status(200).json({_id:article._id});
    } catch(error){
        res.status(400).json({message:'Error deleting',error});
    }
});


router.route("/admin/paginate")
.post(checkLoggedIn,grantAccess('readAny','articles'),async(req,res)=>{
    try{
        let aggQuery;
        if(req.body.keywords != ''){
            const re = new RegExp(`${req.body.keywords}`,'gi');
            aggQuery = Article.aggregate([
                { $match: { title:{ $regex:re }}}
            ])
        } else {
            aggQuery = Article.aggregate();
        }
        
        const limit = req.body.limit ?  req.body.limit : 5;
        const options = {
            page: req.body.page,
            limit,
            sort:{_id:'desc'}
        }

        const articles = await Article.aggregatePaginate(aggQuery,options);
        res.status(200).json(articles)
    } catch(error){
        res.status(400).json({message:'Error',error});
    }
})

router.route("/user/search")
.post(async(req,res)=>{
    try{
        if(req.body.keywords == ''){
            return res.status(400).json({message:'No empty search'})
        }

        /// dog
        const re = new RegExp(`${req.body.keywords}`,'gi');
        let aggQuery = Article.aggregate([
            { $match: { status:"public"}},
            { $match: { title:{ $regex:re }}}
        ]);

        const limit = req.body.limit ?  req.body.limit : 5;
        const options = {
            page: req.body.page,
            limit,
            sort:{_id:'desc'}
        }

        const articles = await Article.aggregatePaginate(aggQuery,options);
        res.status(200).json(articles);
    }catch(error){
        res.status(400).json({message:'Error',error});
    }
})




/// NO AUH REQUIRED ////

router.route("/get_byid/:id")
.get(async(req,res)=>{
    try{
        const _id = req.params.id;
        const article = await Article.find({_id:_id,status:'public'}).populate('category');
        if(!article || article.length === 0){
            return  res.status(400).json({message:'Article not found'});
        }
        res.status(200).json(article)
    } catch(error){
        res.status(400).json({message:'Error fetching article',error});
    }
})


router.route("/loadmore")
.post(async(req,res)=>{
    try{
        let sortArgs = sortArgsHelper(req.body)

        const articles = await Article
        .find({status:'public'})
        .populate('category')
        .sort([[sortArgs.sortBy,sortArgs.order]])
        .skip(sortArgs.skip)
        .limit(sortArgs.limit);
        
        res.status(200).json(articles)
    } catch(error){
        console.log(error)
        res.status(400).json({message:'Error fetching articles',error});
    }
})

router.route("/categories")
.get(async(req,res)=>{
    try{
        const categories = await Category.find();
        res.status(200).json(categories);
    }catch(error){
        res.status(400).json({message:"Error getting categories",error})
    }
}).post(checkLoggedIn,grantAccess('createAny','categories'),async(req,res)=>{
    try{
        const category = new Category(req.body);
        await category.save()

        res.status(200).json(category);
    } catch(error){
        res.status(400).json({message:"Error adding categories",error})
    }
});







module.exports = router;