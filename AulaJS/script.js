let money_cov = {
    get_in(){
        let select = document.getElementById('moeda_in');
        let value = select.options[select.selectedIndex].value;
        return value;
    },
    get_out(){
        let select = document.getElementById('moeda_out');
        let value = select.options[select.selectedIndex].value;
        return value;
    },
    mul(){
        switch (this.get_in(),this.get_out()) {
         case 'real', 'dolar':
            let mult_real_dolar = (parseFloat(document.getElementById("valor_entrada").value)) * 0.18;
            alert(mult_real_dolar.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'}));
         break;
         case 'real', 'euro':
            let mult_real_euro = (parseFloat(document.getElementById("valor_entrada").value)) * 0.15;
            alert(mult_real_euro.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'}));    
         break;
         case 'dolar', 'real':
            let mult_dolar_real = (parseFloat(document.getElementById("valor_entrada").value)) * 5.59;
            alert(mult_dolar_real.toLocaleString('pt-br', { style: 'currency', currency: 'USD'}));    
         break;
         case 'dolar', 'euro':
            let mult_dolar_euro = (parseFloat(document.getElementById('valor_entrada').value)) * 0.83;
            alert(mult_dolar_euro.toLocaleString('pt-br', { style: 'currency', currency: 'USD'}));
         break;
         case 'euro', 'real':
            let mult_euro_real = (parseFloat(document.getElementById('valor_entrada').value)) * 6.73;  
            alert(mult_euro_real.toLocaleString('pt-br', { style: 'currency', currency: 'EUR'}));   
         break;
         case 'euro', 'dolar':     
            let mult_euro_dolar = (parseFloat(document.getElementById('valor_entrada').value)) * 1.20;   
            alert(mult_euro_dolar.toLocaleString('pt-br', { style: 'currency', currency: 'EUR'})); 
         break;
         default:
             alert('Erro!');
        }
    },
}
