var images = ["The Family Book.png", "Father Clipart.png" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "Big Sister.png", "Aunt Clipart.png", "Uncle Clipart.png"];
            var names = ["Family Book","Ritvik Mohan Srivastava", "Rohnish Mohan Srivastava", "Pravi Srivastava", "Nupur Srivastava", "Charvi Srivastava", "Ritika Srivastava", "Nishant Mohan Srivastava"];
            var i = 0;
            function nextslide()
            { 
                i++;
                var numbers_of_family_member_in_array = 7
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            } 