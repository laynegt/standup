import Ember from "ember";

export default Ember.View.extend({

  /*pillWidth: 100,
  pillHeight: 25,
  rowHeight: 30,
  rowMargin: 5,

  didInsertElement: function(){
    var names = this.get('controller.model').mapBy('name');
    var pillWidth = this.get('pillWidth');
    var pillHeight = this.get('pillHeight');
    var rowHeight = this.get('rowHeight');
    var rowMargin = this.get('rowMargin');

    var svg = d3.select('div#names-home')
      .append('svg')
      .attr('width', 200)
      .attr('height', 600);

    var group = svg.append('g')
      .attr('transform', "translate(0, 100)");

    var pillGroup = group.selectAll('text')
      .data(names)
      .enter()
      .append('g')
        .attr('transform', function(d,i){ return "translate(0, " + i*rowHeight + ")";});

    pillGroup.append('rect')
      .attr('fill', 'red')
      .attr('width', 100)
      .attr('height', pillHeight);

    pillGroup.append('text')
      .attr('x', pillWidth/2)
      .attr('y', pillHeight/2)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .attr('fill', 'white')
      .text(function(d){ return d; });

  }*/

});
