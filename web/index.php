<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Email Services</title>

    <meta name="description" content="Source code generated using layoutit.com">
    <meta name="author" content="LayoutIt!">

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body>

    <div class="container-fluid">
	
		<div class="jumbotron jumbotron-sm">
		    <div class="container">
		        <div class="row">
		            <div class="col-sm-12 col-lg-12">
		                <h1 class="h1">
		                    Contact us <small>Feel free to contact us</small></h1>
		            </div>
		        </div>
		    </div>
		</div>
		<div class="container">
		    <div class="row">
		        <div class="col-md-8">
		            <div class="well well-sm">
		                
		                <div class="row">
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label for="emailfrom">
		                                From</label>
		                            <div class="input-group">
		                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
		                                </span>
		                                <input type="email" class="form-control" id="emailfrom" placeholder="Enter email" required="required" /></div>
		                        </div>
		                         <div class="form-group">
		                            <label for="emailto">
		                                To</label>
		                            <div class="input-group">
		                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
		                                </span>
		                                <input type="email" class="form-control" id="emailto" placeholder="Enter email" required="required" /></div>
		                        </div>
		                        <div class="form-group">
		                            <label for="subject">
		                                Subject</label>
		                                <input type="text" class="form-control" id="subject" placeholder="Enter Subject" required="required" />
		                        </div>
		                    </div>
		                    <div class="col-md-6">
		                        <div class="form-group">
		                            <label for="name">
		                                Message</label>
		                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
		                                placeholder="Message"></textarea>
		                        </div>
		                    </div>
		                    <div class="col-md-12">
		                        <button type="input" class="btn btn-primary pull-right" id="btnsend">
		                            Send Message</button>
		                    </div>
		                </div>
		                
		            </div>
		        </div>
		        <div class="col-md-4">
		            <form>
		            <legend><span class="glyphicon glyphicon-globe"></span> Our office</legend>
		            <address>
		                <strong>Ranger, Inc.</strong><br>
		                Kuningan, Jakarta<br>
		                <abbr title="Phone">
		                    P:</abbr>
		                (123) 456-7890
		            </address>
		            <address>
		                <strong>Email Dev</strong><br>
		                <a href="mailto:#">arifin34l@gmail.com</a>
		            </address>
		            </form>
		        </div>
		    </div>
		</div>

	</div>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
  </body>
<script type="text/javascript">

$( "#btnsend" ).click(function() {
  
    var param = {
      nama:$("#nama").val(),
      from:$("#emailfrom").val(),
      to:$("#emailto").val(),
      subject:$("#subject").val(),
      body:$("#message").val()
    } ;

	$.ajax({
		type: "POST",
		headers: { "Access-Control-Allow-Origin" : "*" },
		url: "http://localhost:3001/v1.0/email",
		data: param
	}).done(function (data) {
		console.log(data);
		alert(JSON.stringify(data.status));
	});
});

</script>
</html>