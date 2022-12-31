 require([
	  "esri/config",
	 
	  "esri/views/MapView",
	  "esri/WebMap",
	  "esri/layers/FeatureLayer",
	   ], function ($esriConfig, $MapView,$WebMap,$FeatureLayer) {
        $esriConfig.apiKey = "AAPK449340f85b664e6b802d2d0e65eb4849vlSII8YqKpEj5Fn0hCy2qr4QyOAZRZSB6XWDc2-X8pFlNoRYoQoetUvFs1Y_JVKL";	
	
	// 创建地图
       const webmap = new $WebMap({
         portalItem: { // autocasts as new PortalItem()
           id: "6aaf2270ec364f66a56915c2f1612f5e"
         }
       });
	// 创建地图视图
        const view = new $MapView({
          map: webmap,
         
          container: "viewDiv" // Div element
        });
	
		const tf_airport = new $FeatureLayer({
		    url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/tf1/FeatureServer",
			
		  });
		
		webmap.add(tf_airport);
		const sl_airport = new $FeatureLayer({
		    url: "https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/sl/FeatureServer",
			
		  });
		
		webmap.add(sl_airport);
		
	
	
		

//**********************************************功能：显示地图的比例尺，鼠标等坐标点等**********************************************************
	
	  document.getElementById("tf").addEventListener("click",function(){
	  
	      view.goTo({
	          center: [104.45,30.31],
	          zoom: 13
	      });
		  });
		 
	  document.getElementById("sl").addEventListener("click",function(){
	  
	      view.goTo({
	          center: [103.95,30.57],
	          zoom: 13
	      });
	  		  });
	  		  });