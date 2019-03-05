const Subscription = {
    comment: {
        subscribe(parent, { postId }, { prisma }, info){
            return prisma.Subscription.comment(null, info)
    }},
    post: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('post')
        }
    }
}

export { Subscription as default }