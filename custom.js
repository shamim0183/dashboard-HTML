var chart_data = [
    { "group_name": "Total TDS Deductions 90,00,000", "name": "Jan", "value": 26037 },
    
    { "group_name": "Total Employees Net Pay 100,00,000", "name": "Jan", "value": 33102 },
    { "group_name": "Total Payroll Total Cost 200,00,000", "name": "Jan", "value": 40350 },
    
   
    
    ]
   
    $('#chtAnimatedBarChart').animatedBarChart({
        data: chart_data,
        legend: {
           position: LegendPosition.top,
           width: 150
        }
     });
    