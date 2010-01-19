watch( 'index.html.haml' ) { |md| %x[ haml #{md} > index.html ]; puts "updated" }
