


var search_bootstrap = function(){
	
	return ''+ 
		$div({ "class":"container h-100" },''+
			$div({ "class":"d-flex justify-content-center h-100" },''+
				$div({ "class":"searchbar" },''+
					$input({ "class":"search_input","type":"text","name":"","placeholder":"Search..." },''
				 
					)+
					$a({ "href":"#","class":"search_icon" },''+
						$i({ "class":"fa fa-search" },''
						)
					)
				)
			)
		)

}


/*<style>





    .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: cornflowerblue;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 100px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    position: sticky;

    float: right;
    }

    .search_icon{
		height: 40px;
		width: 40px;
		float: right;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		color:white;
    }

 </style>*/