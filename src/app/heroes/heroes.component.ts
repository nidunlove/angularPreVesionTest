import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  //angular教程中没说要加此 providers，不知道是不是只有angular低版本如此。
  //https://blog.csdn.net/qq_15096707/article/details/53979776
  providers: [HeroService],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero1 = 'Windstorm';
  hero2: Hero = {
  	id: 1,
  	name: 'hahah'
  };
  // heroes = HEROES;
  heroes : Hero[];

  selectedHero:Hero;

  onSelect(hero:Hero):void{
  	this.selectedHero = hero;
  };
  
  // heroService:HeroService;
  constructor(private heroService:HeroService) { 
  	
  };;
  getHeroes(): void {
  	console.log(this.heroService);
	this.heroes = this.heroService.getHeroes();
  };
 //  getHeroes(): void {
	//   this.heroService.getHeroes()
	//       .subscribe(heroes => this.heroes = heroes);
	// }
  ngOnInit() {
  	console.log("HeroService");
  	console.log(HeroService);
  	this.getHeroes();
  }

}
