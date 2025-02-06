using EventSchedular.Models;
using Microsoft.EntityFrameworkCore;

namespace EventSchedular.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Event> Events { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Event>()
                .Property(e => e.EndTime) // Ensure EndTime is correctly mapped
                .HasColumnName("EndTime"); // Avoids using 'End'
        }
    }
}

