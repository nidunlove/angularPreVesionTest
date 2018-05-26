import { Component, OnInit, Input } from '@angular/core';
import { Optional } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';


@Component({
	providers: [/*ActivatedRoute,HeroService,Location*/HeroService],
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;
  id = 0;
  // hero = Hero;
  constructor(
  	@Optional() private route: ActivatedRoute,
  	@Optional() private heroService: HeroService,
  	@Optional() private location: Location
  	) { }

  ngOnInit() {
  	this.getHero();
  }
  getHero(): void {
	  const id = +this.route.snapshot.paramMap.get('id');
	  console.log(id);
	  this.id = id;
	  console.log(this.heroService);
	  // console.log(this.heroService.getHeroes());
	  let heros = this.heroService.getHeroes();
	  // forEach();
	  for (var i = heros.length - 1; i >= 0; i--) {
	  	if(heros[i].id===id){
	  		this.hero = heros[i];
	  		break;
	  	}
	  	
	  }
	 //  this.hero = heros.find(function(value, index, arr) {
		//   return value.id === id;
		// }) // 10
	}
goBack(): void {
    this.location.back();
  }
}
