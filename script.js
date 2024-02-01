document.addEventListener('DOMContentLoaded', function() {
  var dropBanner = document.getElementById('dropBanner');
  dropBanner.style.display = 'block';
});

// Function to close the banner
function closeBanner() {
  var dropBanner = document.getElementById('dropBanner');
  dropBanner.style.display = 'none';
}


   
   
   
   
   document.addEventListener('DOMContentLoaded', function () {
        // Add event listener to the connectionType select element
        document.getElementById('connectionType').addEventListener('change', function () {
            // Call updateImages function when the connection type changes
            updateImages();
        });

        // Add event listener to the addToCartBtn button
        document.getElementById('addToCartBtn').addEventListener('click', function () {
            // Call addToCart function when the button is clicked
            addToCart();
        });
    });

    function updateImages() {
      // Declare the imageSources object within the function
      var imageSources = {
          "Screw-In": ["imgs/threaded.png"],
          "Quick-Connect": ["imgs/CQC.png"]
          // Add more sources as needed
      };

      var selectedConnectionType = document.getElementById("connectionType").value;
      var slidesContainer = document.querySelector(".slide-container");

      // Clear existing slides
      slidesContainer.innerHTML = "";

      // Check if selectedConnectionType is valid
      if (selectedConnectionType && imageSources[selectedConnectionType]) {
          // Update the image sources for each slide
          imageSources[selectedConnectionType].forEach(function (imageSrc, index) {
              // Create a new slide element
              var slide = document.createElement("div");
              slide.className = "slide";

              // Create an image element
              var img = document.createElement("img");
              img.src = imageSrc;
              img.style = "width: 100%; height: 100%; border-radius: 10px; border: solid 2px black;"
              img.alt = "Product Image " + (index + 1);

              // Append the image to the slide
              slide.appendChild(img);

              // Append the slide to the slide container
              slidesContainer.appendChild(slide);
          });
      }
  }
  function updateShpfyBtnId() {
    var connectionTypeSelect = document.getElementById("connectionType");
    var shpfyBtnDiv = document.querySelector(".shpfy-btn");
  
    if (connectionTypeSelect.value === "screwIn") {
        shpfyBtnDiv.id = "product-component-1706753932395";
    } else if (connectionTypeSelect.value === "quickConnect") {
        shpfyBtnDiv.id = "product-component-1706754036073";
    }
  }

  // Call updateImages to display the default images on page load
  updateImages();



   // CQC addToCart
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'bae851-3.myshopify.com',
          storefrontAccessToken: '53f4bb440783997ee23a9b0e63bd74c9',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '8665657344330',
            node: document.getElementById('product-component-1706754036073'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            },
            "text-align": "left"
          },
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#0069cb"
            },
            "background-color": "#0075e1",
            ":focus": {
              "background-color": "#0069cb"
            },
            "border-radius": "10px",
            "padding-left": "43px",
            "padding-right": "43px"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          }
        },
        "contents": {
          "img": false,
          "title": false,
          "price": false
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#0069cb"
            },
            "background-color": "#0075e1",
            ":focus": {
              "background-color": "#0069cb"
            },
            "border-radius": "10px",
            "padding-left": "43px",
            "padding-right": "43px"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#0069cb"
            },
            "background-color": "#0075e1",
            ":focus": {
              "background-color": "#0069cb"
            },
            "border-radius": "10px"
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#0075e1",
            ":hover": {
              "background-color": "#0069cb"
            },
            ":focus": {
              "background-color": "#0069cb"
            }
          },
          "count": {
            "font-size": "13px"
          }
        }
      }
    },
          });
        });
      }
    })();


     // screwIn addToCart
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'bae851-3.myshopify.com',
          storefrontAccessToken: '53f4bb440783997ee23a9b0e63bd74c9',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '8665771573578',
            node: document.getElementById('product-component-1706753932395'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            },
            "text-align": "left"
          },
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#0069cb"
            },
            "background-color": "#0075e1",
            ":focus": {
              "background-color": "#0069cb"
            },
            "border-radius": "10px",
            "padding-left": "43px",
            "padding-right": "43px"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          }
        },
        "contents": {
          "img": false,
          "title": false,
          "price": false
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#0069cb"
            },
            "background-color": "#0075e1",
            ":focus": {
              "background-color": "#0069cb"
            },
            "border-radius": "10px",
            "padding-left": "43px",
            "padding-right": "43px"
          },
          "quantityInput": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "option": {},
      "cart": {
        "styles": {
          "button": {
            "font-size": "13px",
            "padding-top": "14.5px",
            "padding-bottom": "14.5px",
            ":hover": {
              "background-color": "#0069cb"
            },
            "background-color": "#0075e1",
            ":focus": {
              "background-color": "#0069cb"
            },
            "border-radius": "10px"
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#0075e1",
            ":hover": {
              "background-color": "#0069cb"
            },
            ":focus": {
              "background-color": "#0069cb"
            }
          },
          "count": {
            "font-size": "13px"
          }
        }
      }
    },
          });
        });
      }
    })();