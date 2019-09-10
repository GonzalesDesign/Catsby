<Grid container spacing={2}>
		 	<Grid item xs={12} sm={6}>
				<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
				component="img"
				alt="Contemplative Reptile"
				height="140"
				image="/static/images/cards/contemplative-reptile.jpg"
				title="Contemplative Reptile"
				/>
				
				{/* {documentToReactComponents(datas.allContentfulBlogPost.edges.node.body.json, options)} */}
				<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{datas.allContentfulBlogPost.edges.node.title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
					across all continents except Antarctica
				</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
				Share
				</Button>
				<Button size="small" color="primary">
				Learn More
				</Button>
			</CardActions>
		</Card>
			</Grid>
		</Grid>